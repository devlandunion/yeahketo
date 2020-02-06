import React from "react"
import Head from "next/head"
import UpsellProduct from "../../../components/desktop/UpsellProduct/product"
import styles from "../../../styles/desktop/UpsellStyles/style"
import Footer from "../../../components/desktop/Footer/footer"
import Router from "next/router"
import { useEffect } from "react"
import { connect } from "react-redux"
import { importClick } from "../../../redux/actions/postURL.js"
import { leadPosting } from "../../../redux/actions/postLead.js"

const upsell_info = {
  upsellType: 0,
  id: 245,
  src:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/up2-pro.png",
  yeah_title:
    "https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/img/up2-logo.png",
  percent: "68%",
  item: "Yeah Forskolin",
  descLeft: "Add Your",
  descCenter: "SPECIAL DISCOUNTED",
  descRight: "Bottle Just Pay a Special Price",
  discount: "",
  price: 89.99,
  price_disc: "67.00",
  vertIconSource: "/static/up2-lft-img1.png",
  yes: "/desktop/upsell-2",
  no: "/desktop/upsell-2",
  leftBgColor: "#4b052a",
  rightBgColor: "#fff1f8",
  borderColor: "#ffd7ec",
  checkIcon: "/static/up2-tick.png",
  descPrice: "89.99",
}

function Upsell_1_1({ importClick, customerInfo,userAgent,userFullAgent }) {
  useEffect(() => {
    if(customerInfo.length === 0){
      console.log("Redux store is empty!")
      if(localStorage.getItem("firstName") && localStorage.getItem("lastName")){
        var customer = new Object()
        customer.firstName = localStorage.getItem("firstName")
        customer.lastName = localStorage.getItem("lastName")
        customer.address1 = localStorage.getItem("address1")
        customer.address2 = localStorage.getItem("address2")
        customer.city = localStorage.getItem("city")
        customer.postalCode = localStorage.getItem("postalCode")
        customer.emailAddress = localStorage.getItem("emailAddress")
        customer.phoneNumber = localStorage.getItem("phoneNumber")
        customer.state = localStorage.getItem("state")
        customer.city = localStorage.getItem("city")
        console.log("PhoneNumber:"+ "+1" + customer.phoneNumber.replace(/\D+/g, ""))
        leadPosting(
          {
            ...customer,
            phoneNumber: "+1" + customer.phoneNumber.replace(/\D+/g, "")
          },
          userAgent
        )
      }
    }
    importClick("upsellPage2", userFullAgent,  Router.asPath)
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
)(Upsell_1_1)
