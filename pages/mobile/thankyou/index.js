import Head from "next/head"
import React, { useState } from "react"
import Cart from "../../../components/mobile/ThankyouCart/cart"
import { connect } from "react-redux"
import Footer from "../../../components/mobile/Footer/footer"
import products from "../../../products/products"
import { importClick } from "../../../redux/actions/postURL.js"
import Router from "next/router"
import { useEffect } from "react"
function Thankyou({ userFullAgent, importClick }) {
  useEffect(() => {
    importClick("thankyouPage", userFullAgent, Router.asPath)
  }, [])
  const [items] = useState(products)

  return (
    <div className="section">
      <Head>
        <meta name="viewport" content="width=640, user-scalable=0" />
        <title>Thankyou Page</title>
      </Head>
      <section className="content">
        <Cart items={items} />
      </section>
      <Footer isText={false} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    importClick: (pageType, userFullAgent, requestUri) =>
      dispatch(importClick(pageType, userFullAgent, requestUri)),
  }
}

const mapStateToProps = state => {
  return {
    userFullAgent:state.userFullAgent,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thankyou)
