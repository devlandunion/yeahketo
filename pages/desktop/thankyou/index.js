import Head from "next/head"
import React, { useState } from "react"
import { connect } from "react-redux"
import Cart from "../../../components/desktop/ThankyouCart/cart"
import Footer from "../../../components/desktop/Footer/footer"
import styles from "../../../styles/desktop/thankyou/style"
import products from "../../../products/products"
import Router from "next/router"
import { leadPosting } from "../../../redux/actions/postLead.js"
import { importClick } from "../../../redux/actions/postURL.js"
import { useEffect } from "react"
function Thankyou({ userFullAgent,customerInfo,userAgent, importClick }) {
  useEffect(() => {
    if(customerInfo.length === 0){
      console.log("Redux store is empty!")
      if(localStorage.getItem("firstName") && localStorage.getItem("lastName")){
        var person = new Object()
        person.firstName = localStorage.getItem("firstName")
        person.lastName = localStorage.getItem("lastName")
        person.address1 = localStorage.getItem("address1")
        person.address2 = localStorage.getItem("address2")
        person.city = localStorage.getItem("city")
        person.postalCode = localStorage.getItem("postalCode")
        person.emailAddress = localStorage.getItem("emailAddress")
        person.phoneNumber = localStorage.getItem("phoneNumber")
        person.shipState = localStorage.getItem("state")
        person.shipCity = localStorage.getItem("city")
        console.log(person.shipCity)
        leadPosting(
          {
            ...person,
            phoneNumber: "+1" + person.phoneNumber.replace(/\D+/g, "")
          },
          userAgent
        )
      }
    }
    importClick("thankyouPage", userFullAgent,Router.asPath)
  }, [])
  const [items] = useState(products)

  return (
    <div className="section">
      <Head>
        <title>Thankyou</title>
      </Head>
      <style jsx>{styles}</style>
      <div className="header thank-head">
        <img
          alt="..."
          src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/logo.png"
          id="keto-logo"
        />
        <div className="progress-bar">
          <div className="circle active" id="circle-1">
            1
          </div>
          <div className="stage-name" id="name-1">
            Shipping info
          </div>
          <div className="line active" id="line-1" />
          <div className="circle active" id="circle-2">
            2
          </div>
          <div className="stage-name" id="name-2">
            Finish order
          </div>
          <div className="line active" id="line-2" />
          <div className="circle active" id="circle-3">
            3
          </div>
          <div className="stage-name" id="name-3">
            Summary
          </div>
        </div>
      </div>
      <section className="content">
        <Cart items={items} />
      </section>
      <section className="Footer">
        <Footer />
      </section>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    importClick: (pageType, userFullAgent, requestUri) =>
      dispatch(importClick(pageType, userFullAgent, requestUri)),
    leadPosting: (lead, userAgent) => dispatch(leadPosting(lead, userAgent)),
  }
}

const mapStateToProps = state => {
  return {
    userFullAgent:state.userFullAgent,
    userAgent:state.userAgent,
    customerInfo:state.customerInfo,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thankyou)
