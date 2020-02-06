import React from "react"
import styles from "./style"

const Product = ({
  num,
  checked,
  setProduct,
  bottlesQuantity,
  freeQuantity,
  img,
  regularPrice,
  productPrice,
  youSavePrice,
}) => {
  const isChecked = checked === num
  return (
    <>
      <style jsx>{styles}</style>
      <div
        className={`checkout-product ${isChecked && "checked-violet"}`}
        onClick={() => setProduct(num)}
      >
        <div className="container">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            checked={isChecked}
            readOnly
            text="true"
          />
          <span className="bottles-quantity">
            Buy {bottlesQuantity} {bottlesQuantity !== 1 ? "bottles" : "bottle"}
          </span>
          <span className="bottles-quantity yellow">
            {" "}
            {bottlesQuantity !== 1 && `+ Get ${freeQuantity} free`}
          </span>
        </div>
        <div className={`trapezoid ${isChecked && "trapezoid-checked"}`}>
          <span className="shipping-label">
            <span className="shipping-icon ">local_shipping</span>Free shipping
          </span>
        </div>
        <div className={`box ${isChecked && "box-checked"}`}>
          <div className="left-side">
            <img src={img} alt="..." />
          </div>
          <div className="right-side">
            <div className={`ribbon ${isChecked && "ribbon-checked"}`}>
              Best value package
            </div>
            <div className="reg-price">
              Regular price
              <span className="reg-price crossed-out">
                {" "}
                {regularPrice}
                <svg width="35" height="12" className="diagonal-line">
                  <line
                    x1="0"
                    y1="0"
                    x2="35"
                    y2="12"
                    strokeWidth="2"
                    stroke="red"
                  />
                </svg>
              </span>
            </div>
            <span className="promo-price">
              {productPrice}
              <span className="each">/ea</span>
            </span>
            <span className="you-save">You save {youSavePrice}</span>
            <button
              type="button"
              className={`select-button ${isChecked && "selected"}`}
            >
              {isChecked ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
