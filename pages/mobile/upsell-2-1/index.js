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
  id: 247,
  src: "../../../../static/upsells/up1-logo.png",
  bottle: "../../../../static/upsells/upsell1-prdct.png",
  bg_pick: "../../../../static/upsells/upsell1-sec1-bg.png",
  percent: "93%",
  item: "Yeah Caralluma",
  descLessLeft: "Add Your",
  descLessCenter: "SPECIAL DISCOUNTED",
  descLessRight: "Bottle Just Pay a Special Price",
  discount: "",
  priceLess: 89.99,
  price_disc: 65.00,
  yes: "/mobile/thankyou",
  no: "/mobile/thankyou",
}

function Upsell_2_1({ userFullAgent, importClick }) {
  useEffect(() => {
    importClick("upsellPage4", userFullAgent, Router.asPath)
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
        descLessLeft={upsell_info.descLessLeft}
        descLessCenter={upsell_info.descLessCenter}
        descLessRight={upsell_info.descLessRight}
        discount={upsell_info.discount}
        priceLess={upsell_info.priceLess}
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
)(Upsell_2_1)
