import React from "react"
import Head from "next/head"
import Footer from "../../../components/mobile/Footer/footer"
import Form from "../../../components/mobile/Forms/PromoForm"
import Header from "../../../components/mobile/Header/Header"
import Router from "next/router"
import { useEffect } from "react"
import { connect } from "react-redux"
import { importClick } from "../../../redux/actions/postURL.js"
function Shipping({ importClick, userFullAgent }) {
  useEffect(() => {
    importClick("leadPage", userFullAgent,  Router.asPath)
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=640, user-scalable=0" />
        <title>Shipping</title>
      </Head>
      <iframe src="http://komodo.go2cloud.org/aff_l?offer_id=4" scrolling="no" frameBorder="0" width="1" height="1" style={{position: "absolute"}}></iframe>
      <Header
        text="Verify your shipping info"
        logo="../../../static/mobile-shipping-header.jpg"
      />
      <Form />
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
)(Shipping)
