import Link from "next/link"
import React from "react"
import {connect} from "react-redux"
import {addOrder} from "../../../redux/actions/postOrder.js"
import {transactionPosting} from "../../../redux/actions/completeTransaction.js"
import styles from "./style"

function UpsellProduct({
  customerInfo,
  transactionPosting,
  id,
  price,
  priceLess,
  price_disc,
  percent,
  item,
  src,
  bottle,
  bg_pick,
  addOrder,
  desc,
  descLessLeft,
  descLessCenter,
  descLessRight,
  discount,
  no,
  yes,
}) {
  const push = async () => {
    try {
      addOrder(id)
      transactionPosting(customerInfo.orderId, id)
    } catch (e) {
      console.log(e)
    }
  }
  const bgBottleStyle = {
    background: "url(" + bg_pick + ") no-repeat"
  }
  function PriceRender() {
    if (desc) {
      return (
        <div>
          <div
            className="buy-free"
            style={{
              color: "#4b052a",
              fontSize: "28px",
              fontWeight: 700,
              height: "100%",
              lineHeight: "39px",
              width: "100%"
            }}
          >
            {desc}
          </div>
          <div
            className="disc"
            style={{
              color: "#1f1f1f",
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: "39px",
              height: "100%",
              width: "100%"
            }}
          >
            {discount}
          </div>
          <div className="sale_box">
            <div className="discount">
              <div
                className="disc_before"
                style={{
                  position: "relative",
                  color: "#666",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "45px",
                  marginRight: "10px"
                }}
              >
                <div
                  className="line-minus"
                  style={{
                    borderTop: "3px solid red",
                    position: "absolute",
                    width: "175px",
                    top: "22px",
                    left: "142px",
                    transform: "rotate(-15deg)"
                  }}
                ></div>
                {price}{" "}
                <span
                  className="disc_after"
                  style={{
                    color: "#4b052a",
                    fontSize: "35px",
                    lineHeight: "45px",
                    fontWeight: "bold"
                  }}
                >
                  {price_disc}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div
            className="buy-free-less"
            style={{
              position: "relative",
              color: "#1f1f1f",
              fontSize: "28px",
              fontWeight: 400,
              height: "100%",
              lineHeight: "39px",
              width: "100%"
            }}
          >
            {descLessLeft}
            <span
              style={{
                fontWeight: 1000,
                marginLeft: "5px",
                marginRight: "5px",
                color: "#4b052a"
              }}
            >
              {descLessCenter}
            </span>
            {descLessRight}
            <span className="line-minus"></span> {priceLess.toFixed(2)}
            <div
              className="line-minus"
              style={{
                borderTop: "3px solid red",
                position: "absolute",
                width: "75px",
                top: "55px",
                left: "395px",
                transform: "rotate(-15deg)"
              }}
            ></div>
          </div>
          <div className="sale_box">
            <div className="discount">
              <div
                className="disc_after"
                style={{
                  color: "#4b052a",
                  fontSize: "52px",
                  lineHeight: "56px",
                  fontWeight: "bold",
                  marginTop: "5px",
                  height: "100%",
                  width: "100%"
                }}
              >
                {price_disc.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      <head>
        <meta name="viewport" content="width=640, user-scalable=0" />
      </head>
      <div className="container">
        <style jsx>{styles}</style>
        <div className="header">
          {/* <img src="../../../../static/upsells/top-img.jpg" alt="logo" /> */}
          <img
            className="uppsel-head-logo"
            src="../../../../static/upsells/logo.png"
            alt="logo"
          />
          <img
            className="uppsel-head-marks"
            src="../../../../static/upsells/upsell-marks.png"
            alt="marks"
          />
        </div>
        <hr />
        <div className="content">
          <div>
            <p className="first-text">
              WAIT! YOU QUALIFY FOR A LIMITEDTIME DISCOUNT
            </p>
            <p className="second-text">
              {" "}
              {percent} of customers who purchase<strong> Yeah Keto </strong>{" "}
              also purchase <strong>{item}</strong>
            </p>
          </div>
          <div className="description">
            <p className="boost">BOOST YOUR METABOLISM WITH</p>
            <img src={src} alt="product" className="product" />
            <p className="advanced">Advanced Metabolic Support Formula*</p>
            <div className="bottle-with-disc">
              <div className="picture" style={bgBottleStyle}>
                <img className="bottle" src={bottle} />
                <p className="saveContainer">
                  <label className="Save">Save 44%</label>
                </p>
              </div>
              <div className="uls">
                <div className="first-ul material">
                  <img
                    src="../../../../static/upsells/up-1-s1-tick.png"
                    alt=""
                  />
                  <img
                    src="../../../../static/upsells/up-1-s1-tick.png"
                    alt=""
                  />
                  <img
                    src="../../../../static/upsells/up-1-s1-tick.png"
                    alt=""
                  />
                </div>
                <div className="second-ul">
                  <p className="first__component">
                    Breaks Down <strong>Fatty Tissue</strong>
                  </p>
                  <p className="second__component">
                    Preserve <strong>Lean Mucle</strong>
                  </p>
                  <p>
                    Boost <strong>Metabolism</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="payment-info">
              <PriceRender
                desc={desc}
                descLessLeft={descLessLeft}
                descLessCenter={descLessCenter}
                descLessRight={descLessRight}
                discount={discount}
                price={price}
                price_disc={price_disc}
                priceLess={priceLess}
              />
              <div className="buttons">
                <Link href={yes}>
                  <button className="yes" onClick={push}>
                    {" "}
                    YES! COMPLETE CHECKOUT
                  </button>
                </Link>

                <Link href={no}>
                  <button className="no">
                    <img
                      src="../../../../static/promo/mobile/images/images/cut-icon.png"
                      className="no-img"
                      alt=""
                    />
                    No thanks, I’m not interested
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    orderInfo: state.orderInfo,
    isRequested: state.transactionError,
    isSuccess: state.transactionSuccess,
    isError: state.transactionRequest,
    customerInfo: state.customerInfo
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addOrder: obj => dispatch(addOrder(obj)),
    transactionPosting: (orderId, productId) =>
      dispatch(transactionPosting(orderId, productId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpsellProduct)
