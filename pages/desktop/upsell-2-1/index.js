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
  upsellType: 0,
  id: 247,
  src:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/up-prd.png",
  yeah_title:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/img/up1-logo.png",
  percent: "93%",
  item: "Yeah Caralluma",
  descLeft: "Add Your",
  descCenter: "SPECIAL DISCOUNTED",
  descRight: "Bottle Just Pay a Special Price",
  discount: "",
  price: 89.99,
  price_disc: "65.00",
  vertIconSource: "/static/up-lft-img1.png",
  yes: "/desktop/thankyou",
  no: "/desktop/thankyou",
  leftBgColor: "#481048",
  rightBgColor: "#fff6ff",
  borderColor: "#fee8fe",
  checkIcon: "/static/up-tick.png",
  descPrice: "89.99",
}

function Upsell_2_1({ importClick,customerInfo,userAgent, userFullAgent }) {
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
    importClick("upsellPage4", userFullAgent, Router.asPath)
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
        descLeft={upsell_info.descLeft}
        descCenter={upsell_info.descCenter}
        descRight={upsell_info.descRight}
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
        descPrice={upsell_info.descPrice}
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
)(Upsell_2_1)
