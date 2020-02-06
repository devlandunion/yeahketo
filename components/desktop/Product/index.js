import React from "react"
import styles from "./style"

const Product = ({
  num,
  checked,
  setProduct,
  bottlesQuantity,
  freeQuantity,
  img,
  checkoutText,
  regularPrice,
  productPrice,
  youSavePrice,
  subSavePrice,
  subProductPrice,
  subRegularPrice,
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
          {/* <input
            type="checkbox"
            id="scales"
            name="scales"
            checked={isChecked}
            readOnly
            text="true"
          /> */}
          <img
            src={`${
              isChecked
                ? "../../../static/selected-checkbox.png"
                : "../../../static/select-checkbox.png"
            }`}
            alt=""
            className="checkedImage"
          />
          <span className="bottles-quantity bottles-quantity-left">
            Buy {bottlesQuantity} {bottlesQuantity !== 1 ? "bottles" : "bottle"}
          </span>
          <span className="bottles-quantity yellow">
            {" "}
            {bottlesQuantity !== 1 && `+ Get ${freeQuantity} free`}
          </span>
        </div>
        <div className={`trapezoid ${isChecked && "trapezoid-checked"}`}>
          <span className="shipping-label">
            <img src="/static/ship-icon.png" />
            Free shipping
          </span>
        </div>
        <div className={`box ${isChecked && "box-checked"}`}>
          <div className="left-side">
            <img src={img} alt="..." />
          </div>
          <div className="right-side">
            <div className={`ribbon ${isChecked && "ribbon-checked"}`}>{checkoutText}</div>
            <div className="reg-price">
              Regular price
              <span className="reg-price crossed-out">
                {" "}
                {regularPrice + subRegularPrice}
                <svg width="35" height="12" className="diagonal-line">
                  <line x1="0" y1="0" x2="35" y2="12" strokeWidth="2" stroke="red" />
                </svg>
              </span>
            </div>
            <span className="promo-price">
              {productPrice + subProductPrice}
              <span className="each">/ea</span>
            </span>
            <span className="you-save">You Save ${youSavePrice + subSavePrice}</span>
            <button type="button" className={`select-button ${isChecked && "selected"}`}>
              {isChecked ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
