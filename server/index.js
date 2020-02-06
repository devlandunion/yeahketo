const useragent = require("express-useragent")
const express = require("express")
const next = require("next")
const Raven = require("raven")

const port = process.env.PORT || 3004
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

const handle = app.getRequestHandler()
const querystring = require("querystring")
const compression = require("compression")
const cookieParser = require("cookie-parser")

const trackingID = "UA-145841143-1"
const optimizeID = "GTM-W6FV9Z6"

const BACKGROUND_GIRL_EXP = "dMuRRoQnTomHKZ4Rp3b77Q"

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const diffRouting = {
  desktop: [
    { 
      desktop: "/checkout",
      mobile: "/select-package"
    }
  ],
  mobile: [
    {
      mobile: "/payment",
      desktop: "/checkout",
    },
    {
      mobile: "/shipping",
      desktop: "/",
    }
  ]
}

const d2m = (desktopRoute) => {
  const route = diffRouting.desktop.find(r => r.desktop == desktopRoute)
  return route && route.mobile
}

const m2d = (mobileRoute) => {
  const route = diffRouting.mobile.find(r => r.mobile == mobileRoute)
  return route && route.desktop
}

app.prepare().then(() => {
  const server = express()
  server.use(useragent.express())
  server.use(compression())
  server.use(cookieParser())

  server.get("/", (req, res) => {
    const userAgent = req.useragent.isMobile
    let query = req.query ? querystring.stringify(req.query) : ""
    if (!userAgent) {
      res.redirect(`/desktop?${query}`)
    } else {
      res.redirect(`/mobile?${query}`)
    }
  })

  Raven.config("https://7a7d0517a1fd4a3aad60f130830b08ef@sentry.io/1544075").install()

  server.use("/:version", (originalReq, _, next) => {
    originalReq.__websiteVersion = originalReq.params.version
    next()
  }, express.Router()
    .get("*", (request, response, next) => {
      const version = request.__websiteVersion
      const availableVersions = ["desktop", "mobile"]
      if (!availableVersions.includes(version)) {
        console.log(`\n> Not available website version "${version}", skipping`)
        return next()
      }
      const path = request.path.replace(/\/$/, "")
      const isDesktopRequested = version == "desktop"
      const { isMobile } = request.useragent

      const transform = isDesktopRequested ? d2m : m2d
      const pathToRedirect = transform(path) || path

      var queryString = querystring.stringify(request.query) || ""
      if (queryString)
        queryString = `?${queryString}`

      console.log(`\n> Resolved path "/${version}${path}"`)

      return isDesktopRequested && isMobile
        ? response.redirect(`/mobile${pathToRedirect}${queryString}`)
        : !isMobile && !isDesktopRequested
          ? response.redirect(`/desktop${pathToRedirect}${queryString}`)
          : app.render(request, response, `/${version}${path}`, { query: request.query })
    })
  )
  
  server.get("*", (req, res) => {
    const variationId =
      req.cookies.variation == undefined
        ? getRandomIntInclusive(0, 1)
        : req.cookies.variation
    const cookies = [
      {title: "trackingID", var: trackingID},
      {title: "optimizeID", var: optimizeID},
      {title: "variation", var: variationId},
      {title: "experimentID", var: BACKGROUND_GIRL_EXP}
    ]
    cookies.map(el => res.cookie(el.title, el.var))
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
