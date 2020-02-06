import React, { useState } from "react"
import styles from "./style"
import { Waypoint } from "react-waypoint"
import PromoToUpperBtn from "../../PromoToUpperBtn"

function Section8() {
  const [showArrow, setShowArrow] = useState(false)

  const onScroll = e => {
    if (e.currentPosition === "inside") {
      setShowArrow(true)
    } else {
      setShowArrow(false)
    }
  }
  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        <div className="section8">
          <img
            alt="..."
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/logo.png"
            className="logo__img"
          />
          <div>
            <img
              alt="..."
              src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-hd.png"
              className="logo__img--weight"
            />
            <p className="text">
              <strong>Yeah Keto</strong> triggers and maintains the state of ketosis, burning fat
              for energy!
            </p>
            <p className="annotation">Yeah Keto Helps You With</p>
          </div>
          <img
            alt="..."
            className="bottle"
            width="243"
            heoght="473"
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
          />
          <img
            alt="..."
            className="seal"
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s8-seal.png"
          />
          <ul className="help-list">
            <li>
              <span className="upperText">Rapid</span> Ketogenic Weight Loss
            </li>
            <li>
              <span className="upperText">Instant</span> Energy Boost
            </li>
            <li>
              <span className="upperText">Appetite</span> Suppression
            </li>
            <li>
              <span className="upperText">Optimal</span> Metabolic Rate
            </li>
          </ul>
          <Waypoint onEnter={onScroll} onLeave={onScroll} />
          <img
            src="https://yeahketo.com/static/promo/desktop/images/images/s8-arrow.png"
            alt=""
            className={`s8arrow ${showArrow ? "sec8-arr-wo" : ""}`}
          />
          <div className="btn">
            <PromoToUpperBtn/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Section8
