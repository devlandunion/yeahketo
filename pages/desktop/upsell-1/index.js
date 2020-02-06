import React from "react"
import Head from "next/head"
import UpsellProduct from "../../../components/desktop/UpsellProduct/product"
import styles from "../../../styles/desktop/UpsellStyles/style"
import Footer from "../../../components/desktop/Footer/footer"
import Router from "next/router"
import { connect } from "react-redux"
import { leadPosting } from "../../../redux/actions/postLead.js"
import { importClick } from "../../../redux/actions/postURL.js"
import { useEffect } from "react"
const upsell_info = {
  upsellType: 1,
  id: 244,
  src:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/img/up1-1-prd.png",
  yeah_title:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/img/up2-logo.png",
  percent: "68%",
  item: "Yeah Forskolin",
  desc: "BUY 2 BOTTLES + GET 1 FREE",
  discount: "Save 60% Today",
  price: 120,
  price_disc: "49/ea",
  vertIconSource: "/static/up2-lft-img1.png",
  yes: "/desktop/upsell-2",
  no: "/desktop/upsell-1-1",
  leftBgColor: "#4b052a",
  rightBgColor: "#fff1f8",
  borderColor: "#ffd7ec",
  checkIcon: "/static/up2-tick.png",
}

function Upsell_1({ userFullAgent,customerInfo,userAgent,importClick }) {
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
    importClick("upsellPage1", userFullAgent, Router.asPath)
  }, [])
  return (
    <div className="upsell-info">
      <Head>
        <title>Upsell Page</title>
      </Head>
      <style jsx>{styles}</style>
      <iframe src="http://komodo.go2cloud.org/aff_l?offer_id=4" scrolling="no" frameBorder="0" width="1" height="1" style={{position: "absolute"}}></iframe>
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
)(Upsell_1)
