import React from "react"
import styles from "./style"

function OrdrerSummary({ checkedProduct }) {
  const { bottlesQuantity, freeQuantity, productPrice } = checkedProduct
  return (
    <>
      <style jsx>{styles}</style>
      <div className="ordrerSummary">
        <div className="order_info">
          <span id="list-icon">list_alt</span>ORDER SUMMARY
        </div>
        <div className="order_content">
          <div className="order_images">
            <img
              alt="..."
              src="https://yeahketo.com/static/promo/desktop/images/images/5btl.png"
            />
            <img
              alt="..."
              src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/logos.png"
            />
          </div>
          <div className="order_total">
            <div className="order-label">KETO</div>
            <ul className="table_left">
              <li>
                Buy {bottlesQuantity}{" "}
                {bottlesQuantity !== 1 ? "bottles" : "bottle"}{" "}
                {bottlesQuantity !== 1 && `+ Get ${freeQuantity} free`}
              </li>
              <li>Shipping & Handling:</li>
              <li>Discount</li>
              <li id="total-1">TOTAL:</li>
            </ul>
            <ul className="table_right">
              <li>${productPrice}</li>
              <li>$0.00</li>
              <li>$0.00</li>
              <li id="total-2">${productPrice}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default OrdrerSummary
