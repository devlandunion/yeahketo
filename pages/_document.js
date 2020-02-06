import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="EN" style={{scrollBehavior: "smooth"}}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/static/styles/font-awesome.min.css"/>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <script src="https://cdn.ravenjs.com/3.26.4/raven.min.js" crossOrigin="anonymous"></script>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <meta name="description" content="Yeah Keto product sale" />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:200|Montserrat:400,700|Open+Sans:400,500,600,700,400i,500i,600i,700i|Noto+Sans:400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <script
            type="text/javascript"
            src="/static/scriptLoader/scriptGA.js"
          />
        </Head>
        <body style={{
          padding: 0,
          margin: 0,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          overflowX: "hidden",
          boxSizing: "border-box"
        }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// <script
//   type="text/javascript"
//   src="/helpers/scriptGA.js"
// />
export default MyDocument
