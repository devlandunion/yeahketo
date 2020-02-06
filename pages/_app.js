import React from "react"
import App, { Container } from "next/app"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"
import * as Sentry from "@sentry/browser"
import { initStore } from "../redux/store/index.js"

Sentry.init({dsn: "https://7a7d0517a1fd4a3aad60f130830b08ef@sentry.io/1544075"})

class MyApp extends App {
  render() {
    const { Component, pageProps, store, router } = this.props
    const { query } = router

    return (
      <Container>
        <Provider store={{ ...store, query }}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore, { debug: true })(MyApp)
