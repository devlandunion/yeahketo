import React from "react"
import styles from "./style"

function Section6() {
  return (
    <>
      <style jsx>{styles}</style>
      <section className="section-6">
        <h1 className="title">Why Choose Yeah Keto</h1>
        <h1 className="subtitle">The #1 Keto Weight Loss Blend</h1>
        <p className="common-txt">
          <b>Yeah Keto</b> has been formulated with a high potency blend of BHB
          Ketones to ensure that you are able to achieve ketosis faster and stay
          in ketosis for longer.
        </p>
        <img
          src="../../../../static/s6-bottle.png"
          alt=""
        />
        <img
          className="quality-img"
          src="../../../../static/s6-seal.png"
          alt=""
        />
        <img
          className="brd-line"
          src="../../../../static/s6-bdr-line.jpg"
          alt=""
        />
        <ul className="list-done">
          <li>High Potency Formula</li>
          <li>700 MG Blend of BHB Ketones</li>
          <li>Rapid Absorption Formula</li>
          <li>Free From Harmful Chemicals & Fillers</li>
          <li>Burn Fat For Fuel & Lose Weight</li>
        </ul>
        <div className="block-img-bg">
          Safe{" "}
          <img
            src="../../../../static/s6-plus-shp.png"
            alt=""
          />{" "}
          Effective{" "}
          <img
            src="../../../../static/s6-plus-shp.png"
            alt=""
          />{" "}
          Natural
        </div>
      </section>
    </>
  )
}
export default Section6
