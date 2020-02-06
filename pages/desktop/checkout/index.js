import Head from "next/head"
import React, { useState } from "react"
import Form from "../../../components/desktop/Forms/CheckoutForm"
import Product from "../../../components/desktop/Product"
import Footer from "../../../components/desktop/Footer/footer"
import styles from "../../../styles/desktop/Checkout/style"
import Timer from "../../../components/universall/Timer/Timer"
import OrdrerSummary from "../../../components/desktop/OrderSummary/OrderSummary"
import LoadingWindow from "../../../components/universall/Loader/loader"
import products from "../../../products/products"
import Router from "next/router"
import { useEffect } from "react"
import { connect } from "react-redux"
import { importClick } from "../../../redux/actions/postURL.js"
import { leadPosting } from "../../../redux/actions/postLead.js"

import {preauthPosting} from "../../../redux/actions/preauthPostCard"


const mocksForProducts = products.slice(0, 3)

function Checkout({ importClick,leadPosting,preauthPosting,userFullAgent,userAgent,isShowSpinner }) {
  
  useEffect(() => {
    if(!customerInfo){
      console.log("Redux store is empty!")
      if(localStorage.getItem("firstName") && localStorage.getItem("lastName")){
        var customerInfo = new Object()
        customerInfo.firstName = localStorage.getItem("firstName")
        customerInfo.lastName = localStorage.getItem("lastName")
        customerInfo.address1 = localStorage.getItem("address1")
        customerInfo.address2 = localStorage.getItem("address2")
        customerInfo.city = localStorage.getItem("city")
        customerInfo.postalCode = localStorage.getItem("postalCode")
        customerInfo.emailAddress = localStorage.getItem("emailAddress")
        customerInfo.phoneNumber = localStorage.getItem("phoneNumber")
        customerInfo.shipState = localStorage.getItem("state")
        customerInfo.shipCity = localStorage.getItem("city")
        customerInfo.orderId = localStorage.getItem("orderID")
        customerInfo.customerId = localStorage.getItem("customerID")
        leadPosting(
          {
            ...customerInfo,
            phoneNumber: "+1" + customerInfo.phoneNumber.replace(/\D+/g, "")
          },
          userAgent
        )
        var cardInfo = new Object()
        if(localStorage.getItem("cardNumber") && localStorage.getItem("cardSecurityCode")){
          cardInfo.cardNumber = localStorage.getItem("cardNumber")
          cardInfo.expMonth = localStorage.getItem("expMonth")
          cardInfo.expYear = localStorage.getItem("expYear")
          cardInfo.cardSecurityCode = localStorage.getItem("cardSecurityCode")
          preauthPosting(localStorage.getItem("checkedProductID"), cardInfo, customerInfo, userAgent)
        } 
      }
    }
    
    importClick("checkoutPage", userFullAgent, Router.asPath)
  }, [])
  const [checkedProduct, setCheckedProduct] = useState(1)
  /**** */
  return (
    <>
      <div className="chk-bg">
        <Head>
          <title>Checkout</title>
        </Head>
        <style jsx>{styles}</style>
        <iframe src="http://komodo.go2cloud.org/aff_l?offer_id=4" scrolling="no" frameBorder="0" width="1" height="1" style={{position: "absolute"}}></iframe>
        <section className="Section">
          <div className="header">
            <img alt="..." src="../../../static/logo.png" id="keto-logo" />
            <div className="progress-bar">
              <div className="circle active" id="circle-1">
                1
              </div>
              <div className="stage-name" id="name-1">
                Shipping info
              </div>
              <div className="line active" id="line-1" />
              <div className="circle active circle2" id="circle-2">
                2
              </div>
              <div className="stage-name stage-name2" id="name-2">
                Finish order
              </div>
              <div className="line" id="line-2" />
              <div className="circle" id="circle-3">
                3
              </div>
              <div className="stage-name stage-name3" id="name-3">
                Summary
              </div>
            </div>
            <img alt="..." src="../../../static/chk-seal.png" id="seals" />
          </div>
          {isShowSpinner?<LoadingWindow/>:null}
          <div className="Content">
            <div className="Inside_content">
              <div>
                <div className="timer">
                  Your Special 40% OFF Savings expires in -
                  <span id="timer-icon">timer</span>
                  <span id="timer-count">
                    <Timer initialTimeSeconds={300} />
                  </span>
                </div>
                <div className="subheader">
                  SELECT YOUR PACKAGE TODAY & SAVE MORE!
                </div>
              </div>
              <div className="Products">
                {mocksForProducts.map((el, i) => (
                  <Product
                    key={i}
                    className="prod"
                    {...el}
                    checked={checkedProduct}
                    setProduct={setCheckedProduct}
                  />
                ))}
              </div>
              <OrdrerSummary
                checkedProduct={mocksForProducts[checkedProduct - 1]}
              />
            </div>
            <div className="Form">
              <Form
                href="/desktop/upsell-1"
                checkedProduct={mocksForProducts[checkedProduct - 1]}
              />
              <div className="picture">
                <img alt="..." src="../../../static/s2-t1.png" />
                Stubborn belly fat was a major concern for me. Experienced an
                incredible transformation within a month of using Yeah Keto.
                <p className="author">
                  <span>- Susie P.</span> | Nevada
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="Footer">
          <Footer />
        </section>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    leadPosting: (lead, userAgent) => dispatch(leadPosting(lead, userAgent)),
    preauthPosting: (checkedProduct, values, customerInfo, userAgent) => dispatch(preauthPosting(checkedProduct, values, customerInfo, userAgent)),
    importClick: (pageType, userFullAgent, requestUri) =>
      dispatch(importClick(pageType, userFullAgent, requestUri)),
  }
}

const mapStateToProps = state => {
  return {
    userAgent:state.userAgent,
    userFullAgent:state.userFullAgent,
    isShowSpinner:state.isShowSpinner,
    customerInfo:state.customerInfo,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
