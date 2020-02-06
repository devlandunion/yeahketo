import React from "react"
import Head from "next/head"
import Router from "next/router"
import { useEffect } from "react"
import { connect } from "react-redux"
import Section1 from "../../components/mobile/Sections/Section1/section1"
import Section2 from "../../components/mobile/Sections/Section2/section2"
import Section3 from "../../components/mobile/Sections/Section3/section3"
import Section4 from "../../components/mobile/Sections/Section4/section4"
import Section5 from "../../components/mobile/Sections/Section5/section5"
import Section6 from "../../components/mobile/Sections/Section6/section6"
import Section7 from "../../components/mobile/Sections/Section7/section7"
import Section8 from "../../components/mobile/Sections/Section8/section8"
import Strip1 from "../../components/mobile/Strips/Strip1/strip1"
import Strip2 from "../../components/mobile/Strips/Strip2/strip2"
import Strip3 from "../../components/mobile/Strips/Strip3/strip3"
import Strip4 from "../../components/mobile/Strips/Strip4/strip4"
import Strip5 from "../../components/mobile/Strips/Strip5/strip5"
import Footer from "../../components/mobile/Footer/footer"
import PromoButton from "../../components/mobile/PromoButton"
import { importClick } from "../../redux/actions/postURL.js"

function Index({ userFullAgent, importClick }) {
  
  useEffect(() => {
    importClick("presellPage", userFullAgent, Router.asPath)
  }, [])
  return (  
    <>
      <Head>
        <meta name="viewport" content="width=640, user-scalable=0" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <link rel="stylesheet" type="text/css" href="../static/fonts/fonts.css" />
        <title>Promo</title>
      </Head>
      <iframe src="http://komodo.go2cloud.org/aff_l?offer_id=4" scrolling="no" frameBorder="0" width="1" height="1" style={{position: "absolute"}}></iframe>
      <section className="Section1">
        <Section1 />
      </section>
      <section className="Section2">
        <Section2 />
      </section>
      <section className="Section3">
        <Section3 />
      </section>
      <section className="Strip1">
        <Strip1 />
      </section>
      <section className="Section4">
        <Section4 />
      </section>
      <section className="Strip2">
        <Strip2 />
      </section>
      <section className="Section5">
        <Section5 />
      </section>
      <section className="Strip3">
        <Strip3 />
      </section>
      <section className="Section6">
        <Section6 />
      </section>
      <section className="Strip4">
        <Strip4 />
      </section>
      <section className="Section7">
        <Section7 />
      </section>
      <section className="Strip5">
        <Strip5 />
      </section>
      <section className="Section8">
        <Section8 />
      </section>
      <PromoButton />
      <section className="Footer">
        <Footer />
      </section>
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
    isLeadPosting: state.leadPostingRequest,
    isLeadSuccess: state.leadPostingSuccess,
    userFullAgent:state.userFullAgent,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
