import React from "react"
import Head from "next/head"
import UpsellProduct from "../../../components/desktop/UpsellProduct/product"
import styles from "../../../styles/desktop/UpsellStyles/style"
import Footer from "../../../components/desktop/Footer/footer"
import Router from "next/router"
import { useEffect } from "react"
import { connect } from "react-redux"
import { leadPosting } from "../../../redux/actions/postLead.js"
import { importClick } from "../../../redux/actions/postURL.js"

const upsell_info = {
  upsellType: 1,
  id: 246,
  src:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/img/up2-1-prd.png",
  yeah_title:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/img/up1-logo.png",
  percent: "93%",
  item: "Yeah Caralluma",
  desc: "BUY 2 BOTTLES + GET 1 FREE",
  discount: "Save 60% Today",
  price: 120,
  price_disc: "48/ea",
  vertIconSource: "/static/up-lft-img1.png",
  yes: "/desktop/thankyou",
  no: "/desktop/upsell-2-1",
  leftBgColor: "#481048",
  rightBgColor: "#fff6ff",
  borderColor: "#fee8fe",
  checkIcon: "/static/up-tick.png",
}

function Upsell_2({ importClick,customerInfo,userAgent, userFullAgent }) {
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
        person.state = localStorage.getItem("state")
        person.city = localStorage.getItem("city")
        leadPosting(
          {
            ...person,
            phoneNumber: "+1" + person.phoneNumber.replace(/\D+/g, "")
          },
          userAgent
        )
      }
    }
    importClick("upsellPage3", userFullAgent, Router.asPath)
  }, [])
  return (
    <div className="upsell-info">
      <Head>
        <title>Upsell Page</title>
      </Head>
      <style jsx>{styles}</style>
      <UpsellProduct
        upsellType={upsell_info.upsellType}
        id={upsell_info.id}
        src={upsell_info.src}
        yeah_title={upsell_info.yeah_title}
        percent={upsell_info.percent}
        item={upsell_info.item}
        desc={upsell_info.desc}
        vertIconSource = {upsell_info.vertIconSource}
        discount={upsell_info.discount}
        price={upsell_info.price}
        price_disc={upsell_info.price_disc}
        yes={upsell_info.yes}
        no={upsell_info.no}
        leftBgColor={upsell_info.leftBgColor}
        rightBgColor={upsell_info.rightBgColor}
        borderColor={upsell_info.borderColor}
        checkIcon={upsell_info.checkIcon}
      />
      <section className="Footer">
        <Footer />
      </section>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    leadPosting: (lead, userAgent) => dispatch(leadPosting(lead, userAgent)),
    importClick: (pageType, userFullAgent, requestUri) =>
      dispatch(importClick(pageType, userFullAgent, requestUri)),
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
)(Upsell_2)
