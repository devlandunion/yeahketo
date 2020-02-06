import React from "react"
import styles from "./style"

function Section6() {
  return (
    <>
      <style jsx>{styles}</style>
      <section className="why-choose">
        <p className="main-title">Why Choose Yeah Keto</p>
        <p className="main-subtitle">The #1 Keto Weight Loss Blend</p>
        <p className="main-text">
          <strong>Yeah Keto</strong> has been formulated with a high potency
          blend of BHB Ketones to ensure that you are able to achieve ketosis
          faster and stay in ketosis for longer.
        </p>

        <div className="box">
          <img
            alt="..."
            className="logos"
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s6-seals.png"
          />
          <img
            alt="..."
            className="keto left"
            width="260"
            height="420"
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
          />
          <img
            alt="..."
            className="keto center"
            width="260"
            height="506"
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
          />
          <img
            alt="..."
            className="keto right"
            width="260"
            height="420"
            src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
          />
          <div className="sub-box">
            <ul>
              <li>High Potency Formula</li>
              <li>700 MG Blend of BHB Ketones</li>
              <li>Rapid Absorption Formula</li>
              <li>Free From Harmful Chemicals & Fillers</li>
              <li>Burn Fat For Fuel & Lose Weight</li>
            </ul>
            <div className="sub-box-text">
              Safe
              <img
                alt="..."
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s6-plus.png"
              />
              Effective
              <img
                alt="..."
                src="https://yeahketo-funnel-staging.herokuapp.com/static/promo/desktop/images/images/s6-plus.png"
              />
              Natural
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Section6
