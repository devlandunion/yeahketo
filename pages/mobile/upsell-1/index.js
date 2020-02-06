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
  id: 244,
  src: "../../../../static/upsells/up2-logo.png",
  bottle: "../../../../static/upsells/upsell11-prdct.png",
  percent: "68%",
  item: "Yeah Forskolin",
  bg_pick: "../../../../static/upsells/upsell2-sec1-bg.png",
  desc: "BUY 2 BOTTLES + GET 1 FREE",
  discount: "Save 60% Today",
  price: "$120/ea",
  price_disc: "48/ea",
  yes: "/mobile/upsell-2",
  no: "/mobile/upsell-1-1",
}

function Upsell_1({ userFullAgent, importClick }) {
  useEffect(() => {
    importClick("upsellPage1", userFullAgent, Router.asPath)
  }, [])
  return (
    <div className="upsell-info">
      <Head>
        <meta name="viewport" content="width=640, user-scalable=0" />
        <title>Upsell Page</title>
      </Head>
      <style jsx>{styles}</style>
      <iframe src="http://komodo.go2cloud.org/aff_l?offer_id=4" scrolling="no" frameBorder="0" width="1" height="1" style={{position: "absolute"}}></iframe>
      <UpsellProduct
        id={upsell_info.id}
        src={upsell_info.src}
        bottle={upsell_info.bottle}
        bg_pick={upsell_info.bg_pick}
        percent={upsell_info.percent}
        item={upsell_info.item}
        header_dics={upsell_info.header_dics}
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
)(Upsell_1)
