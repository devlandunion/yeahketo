import React from "react"

import Head from "next/head"
import UpsellProduct from "../../../components/mobile/UpsellProduct/product"
import styles from "../../../styles/mobile/UpsellStyles/style"
import Footer from "../../../components/mobile/Footer/footer"
import Router from "next/router"
import { useEffect } from "react"
import { connect } from "react-redux"
import { importClick } from "../../../redux/actions/postURL.js"

const upsell_info = {
  id: 246,
  src: "../../../../static/upsells/up1-logo.png",
  bottle: "../../../../static/upsells/upsell21-prdct.png",
  bg_pick: "../../../../static/upsells/upsell1-sec1-bg.png",
  percent: "93%",
  item: "Yeah Caralluma",
  desc: "BUY 2 BOTTLES + GET 1 FREE",
  discount: "Save 60% Today",
  price: "$120/ea",
  price_disc: "48/ea",
  yes: "/mobile/thankyou",
  no: "/mobile/upsell-2-1",
}

function Upsell_2({ userFullAgent, importClick }) {
  useEffect(() => {
    importClick("upsellPage3", userFullAgent,Router.asPath)
  }, [])
  return (
    <div className="upsell-info">
      <Head>
        <meta name="viewport" content="width=640, user-scalable=0" />
        <title>Upsell Page</title>
      </Head>
      <style jsx>{styles}</style>
      <UpsellProduct
        id={upsell_info.id}
        src={upsell_info.src}
        bottle={upsell_info.bottle}
        bg_pick={upsell_info.bg_pick}
        percent={upsell_info.percent}
        item={upsell_info.item}
        desc={upsell_info.desc}
        discount={upsell_info.discount}
        price={upsell_info.price}
        price_disc={upsell_info.price_disc}
        yes={upsell_info.yes}
        no={upsell_info.no}
      />
      <section className="Footer">
        <Footer />
      </section>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    importClick: (pageType, userFullAgent, campaignId, requestUri) =>
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
)(Upsell_2)
