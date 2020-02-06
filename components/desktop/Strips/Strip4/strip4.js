import React from "react"
import styles from "./style"
import PromoToUpperBtn from "../../PromoToUpperBtn"

function Strip1() {
  return (
    <div className="content">
      <style jsx>{styles}</style>
      <img
        alt="..."
        src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/s1-btl1.png"
      />
      <div className="description">
        <p className="header">ACHIEVE KETOSIS WITH YEAH KETO &</p>
        <p className="pink">BURN FAT FASTER!</p>
        <p className="descr">
          <strong>Yeah Keto</strong> is the perfect supplement to help you get
          the maximum out of your ketogenic diet & lifestyle!
        </p>
        <p className="bold">
          <strong>Order Today & Get Free Bottles On Select Packages!</strong>
        </p>
        <PromoToUpperBtn/>
      </div>
    </div>
  )
}
export default Strip1
