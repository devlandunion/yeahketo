import React from "react"
import Router from "next/router"
import { useEffect } from "react"
import Header from "../../../components/mobile/Header/Header"
import PaymentForm from "../../../components/mobile/Forms/CheckoutForm"
import Footer from "../../../components/mobile/Footer/footer"
import Head from "next/head"
import { connect } from "react-redux"
import { importClick } from "../../../redux/actions/postURL.js"
function Payment({ importClick, userFullAgent }) {
  useEffect(() => {
    importClick("checkoutPage", userFullAgent, Router.asPath)
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=640, user-scalable=0" />
        <title>Payment</title>
      </Head>
      <Header text="Enter your payment information" logo="./../../../static/top-img-v2.jpg" />
      <PaymentForm />
      <Footer />
    </>
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
)(Payment)
