import React from "react"
import Head from "next/head"
import { connect } from "react-redux"
import Section1 from "../../components/desktop/Sections/Section1/section1"
import Section2 from "../../components/desktop/Sections/Section2/section2"
import Section3 from "../../components/desktop/Sections/Section3/section3"
import Section4 from "../../components/desktop/Sections/Section4/section4"
import Section5 from "../../components/desktop/Sections/Section5/section5"
import Section6 from "../../components/desktop/Sections/Section6/section6"
import Section7 from "../../components/desktop/Sections/Section7/section7"
import Section8 from "../../components/desktop/Sections/Section8/section8"
import Strip1 from "../../components/desktop/Strips/Strip1/strip1"
import Strip2 from "../../components/desktop/Strips/Strip2/strip2"
import Strip3 from "../../components/desktop/Strips/Strip3/strip3"
import Strip4 from "../../components/desktop/Strips/Strip4/strip4"
import Strip5 from "../../components/desktop/Strips/Strip5/strip5"
import Footer from "../../components/desktop/Footer/footer"
import Modal from "../../components/universall/PopUp"
import styles from "../../styles/desktop/style"
import { importClick } from "../../redux/actions/postURL.js"
import { leadPostingRequest, leadPostingSuccess } from "../../redux/actions/postLead"
import { leadPosting } from "../../redux/actions/postLead.js"
import Router from "next/router"
import { useEffect } from "react"


function Index({
  isLeadPosting,
  isLeadSuccess,
  closeProcessing,
  closeSuccess,
  customerInfo,
  userAgent,
  userFullAgent,
  importClick,
  leadPosting,
  variation,
}) {
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
  
        leadPosting(
          {
            ...person,
            phoneNumber: "+1" + person.phoneNumber.replace(/\D+/g, "")
          },
          userAgent
        )
      }
    }
    
    importClick("leadPage", userFullAgent,Router.asPath)
  }, [])
  const changeBg =
    variation == 0
      ? "url(../static/promo/up-bg1.jpg) center top no-repeat"
      : "url(../static/promo/up-bg2.jpg) center top no-repeat"
  return (
    <>
      <Head>
        <title>Promo</title>

      </Head>
      <iframe src="http://komodo.go2cloud.org/aff_l?offer_id=4" scrolling="no" frameBorder="0" width="1" height="1" style={{position: "absolute"}}></iframe>
      <Modal isOpen={isLeadPosting} setIsOpen={closeProcessing}>
        <img
          alt=""
          src="../static/shipping-page-submitting.png"
          className="modal-content"
          style={{
            width: "max-content",
            height: "max-content"
          }}
        />
      </Modal>
      <Modal isOpen={isLeadSuccess} setIsOpen={closeSuccess}>
        <img
          alt=""
          src="../static/lead_form_success_popup.png"
          className="modal-content"
          style={{
            width: "max-content",
            height: "max-content",
          }}
        />
      </Modal>
      <style jsx>{styles}</style>
      <div className="topbar">
        <div className="container">
          <p className="topbartxt">
            <span>WARNING:</span>
            Due to extremely high media demand, there is limited supply of
            <span> Yeah Keto </span>
            in stock as of
            <span>
              {" "}
              {new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
      </div>
      <section className="Section1" style={{ background: changeBg }}>
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
      <section className="Footer">
        <Footer />
      </section>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    closeProcessing: () => dispatch(leadPostingRequest(false)),
    closeSuccess: () => dispatch(leadPostingSuccess(false)),
    leadPosting: (lead, userAgent) => dispatch(leadPosting(lead, userAgent)),
    importClick: (pageType, userFullAgent, requestUri) =>
      dispatch(importClick(pageType, userFullAgent, requestUri)),
  }
}

const mapStateToProps = state => {
  console.log("CustomerInfo:"+ state.customerInfo)
  return {
    isLeadPosting: state.leadPostingRequest,
    isLeadSuccess: state.leadPostingSuccess,
    userFullAgent:state.userFullAgent,
    variation: state.variation,
    customerInfo:state.customerInfo,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
