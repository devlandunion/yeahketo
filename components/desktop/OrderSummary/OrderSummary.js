import React from "react"
import styles from "./style"

function OrdrerSummary({ checkedProduct }) {
  const { bottlesQuantity, freeQuantity, productPrice } = checkedProduct
  return (
    <>
      <style jsx>{styles}</style>
      <div className="ordrerSummary">
        <div className="order_info" style={{background:"url(../../static/smry-icn.jpg) left 15px top 10px no-repeat"}}>
          ORDER SUMMARY
        </div>
        <div className="order_content">
          <div className="order_images">
            <div id = 'prod_img'>
              <img className="order_bottle" alt="..." src="../../static/checkout-order-bottle.png" />
            </div>
            
            <img alt="..." src="../../static/chk-order-logos.png" className="order_ref"/>
          </div>
          <div className="order_total">
            
            <ul className="table_left">
              <li>
                <b>KETO</b><br/>
                <span>
                  Buy {bottlesQuantity} {bottlesQuantity !== 1 ? "bottles" : "bottle"}{" "}
                  {bottlesQuantity !== 1 && `+ Get ${freeQuantity} FREE`}
                </span>
              </li>
              <li>Shipping & Handling:</li>
              <li>Discount</li>
              <li id="total-1">
                <b>TOTAL:</b>
              </li>
            </ul>
            <ul className="table_right">
              <li>${parseFloat(productPrice * (bottlesQuantity + freeQuantity)).toFixed(2)}</li>
              <li>$0.00</li>
              <li>$0.00</li>
              <li id="total-2">
                <b>${parseFloat(productPrice * (bottlesQuantity + freeQuantity)).toFixed(2)}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default OrdrerSummary
