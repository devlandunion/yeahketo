import React from "react"
import styles from "./style"
import PromoToUpperBtn from "../../PromoToUpperBtn"

function Strip2() {
  return (
    <strong className="content">
      <style jsx>{styles}</style>
      <img
        className="bottle"
        alt="..."
        src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
      />
      <strong className="description">
        <p className="header">BURN FAT INSTEAD OF CARBS TODAY WITH</p>
        <p className="pink">YEAH KETO!</p>
        <p className="descr">
          <strong>Yeah Keto</strong> helps you achieve ketosis and stay in
          ketosis for longer, maximizing weight management & overall health.
        </p>
        <p className="bold">
          <strong>Order Today & Get Free Bottles On Select Packages!</strong>
        </p>
        <PromoToUpperBtn/>
      </strong>
    </strong>
  )
}
export default Strip2
