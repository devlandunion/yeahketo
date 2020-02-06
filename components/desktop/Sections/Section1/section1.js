import React from "react"
import {connect} from "react-redux"
import Form from "../../Forms/PromoForm"
import styles from "./style"

function Section1(props) {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        <div className="section1">
          <div className="logo">
            <img alt="..." src="../../../../static/logo.png" />
          </div>
          <div className="sub-title-sect1">
            <img alt="..." src="../../../../static/s1-hd.png" />
          </div>
          <p className="text">
            <strong>Yeah Keto</strong> triggers and maintains the state of ketosis, <br/>
            burning fat for energy!
          </p>
          <p className="annotation">Yeah Keto Helps You With</p>

          <ul>
            <li>
              <span>Rapid</span> Ketogenic Weight Loss
            </li>
            <li>
              <span>Instant</span> Energy Boost
            </li>
            <li>
              <span>Appetite</span> Suppression
            </li>
            <li>
              <span>Optimal</span> Metabolic Rate
            </li>
          </ul>
          <img
            alt="..."
            className="bottle"
            src="../../../../static/s1-btl1.png"
          />
          {props.variation == 0 ? (
            <img
              alt="..."
              src="../../../../static/s1-arrow.png"
              className="arrow"
            />
          ) : (
            <img
              alt="..."
              style={{margin: "24px 0 0 247px",maxWidth: "620px"}}
              src="../../../../static/promo/s1-arrow.png"
              className="arrow"
            />
          )}
          <p className="seal">Join the Keto Revolution with Yeah Keto!</p>
        </div>
        <Form href="/checkout" />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    variation: state.variation
  }
}

export default connect(
  mapStateToProps,
  null
)(Section1)
