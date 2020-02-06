/* jshint ignore:start */
import React from "react"
import Link from "next/link"
import { connect } from "react-redux"
import { addOrder } from "../../../redux/actions/postOrder.js"
import { transactionPosting } from "../../../redux/actions/completeTransaction.js"
import styles from "./style"

function UpsellProduct({
  upsellType,
  customerInfo,
  transactionPosting,
  id,
  price,
  price_disc,
  percent,
  src,
  vertIconSource,
  yeah_title,
  addOrder,
  descLeft,
  descCenter,
  descRight,
  discount,
  no,
  yes,
  item,
  leftBgColor,
  rightBgColor,
  borderColor,
  checkIcon,
  descPrice,
}) {
  const push = async () => {
    try {
      addOrder(id)
      transactionPosting(customerInfo.orderId, id)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <style jsx>{styles}</style>
      <div className="img_logos ups-head">
        <img
          alt="..."
          src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/logo.png"
          id="keto-logo"
        />
        <div className="progress-bar">
          <div className="circle active" id="circle-1">
            1
          </div>
          <div className="stage-name" id="name-1">
            Shipping info
          </div>
          <div className="line active" id="line-1" />
          <div className="circle active ups-circle2" id="circle-2">
            2
          </div>
          <div className="stage-name ups-circle2-name" id="name-2">
            Finish order
          </div>
          <div className="line" id="line-2" />
          <div className="circle" id="circle-3">
            3
          </div>
          <div className="stage-name" id="name-3">
            Summary
          </div>
        </div>
      </div>
      <div className="Box">
        <div className="Save">
          <span>Save $44%</span>
        </div>
        <div className="Pictures">
          <img
            alt="..."
            src={vertIconSource}
          />
        </div>
        <div className="header">
          <div className="head">
            WAIT! YOU QUALIFY FOR A LIMITED TIME DISCOUNT
          </div>
          <div className="subhead"> {percent} of customers who purchase<strong> Yeah Keto </strong> also purchase <strong>{item}</strong></div>
          <div className="content">
            <div className="BottleBox" style={{backgroundColor: leftBgColor}}>
              <img alt="..." src={src} />
            </div>
            <div className="description" style={{backgroundColor: rightBgColor, borderColor: borderColor}}>
              <div className="Boost">CURB YOUR CRAVINGS WITH</div>
              <div className="YEAHFORK">
                <img alt="..." src={yeah_title} />
              </div>
              <div className="Advanced" style={{color: leftBgColor}}>
                Advanced Appetite Suppression*
              </div>
              <div className="table">
                <div className="col_1 table_flex">
                  <img
                    alt="..."
                    src={checkIcon}
                  />
                  Suppress 
                  <strong>Appetite</strong>
                </div>
                <div className="col_2 table_flex">
                  <img
                    alt="..."
                    src={checkIcon}
                  />
                  Reduces 
                  <strong>Overeating</strong>
                </div>
                <div className="col_3 table_flex">
                  <img
                    alt="..."
                    src={checkIcon}
                  />
                  Boost
                  <strong>Weight Loss</strong>
                </div>
              </div>
              <div className="sale_box">
                <div className={"sale_hunt " + `${upsellType ? "upsell-one-form" : "upsell-two-form"}`} style={{color: leftBgColor}}>{descLeft}<span style ={{ 
                  fontWeight: 1000,
                  marginLeft: "5px",
                  marginRight: "5px",
                  color:"#4b052a"}}>{descCenter}</span>{descRight}<span className="descprice"> {descPrice}</span></div>
                <div className="discount_info">{discount}</div>
                <div className={"discount " + `${upsellType ? "upsell-one-price" : "upsell-two-price"}`}>
                  <div className="disc_before">
                    <div className="line-minus"></div>
                    ${price}/ea
                  </div>
                  <div className="disc_after" style={{color: leftBgColor}}>{price_disc}</div>
                </div>
                <div className="buttons">
                  <Link href={yes}>
                    <button className="yes" onClick={push}>
                      {" "}
                      YES! COMPLETE CHECKOUT
                    </button>
                  </Link>
                  <Link href={no}>
                    <button className="no">
                      <img src="../../../../static/promo/mobile/images/images/cut-icon.png" className = "no-img" alt=""/>
                      No thanks, I’m not interested
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    orderInfo: state.orderInfo,
    customerInfo: state.customerInfo,
    isRequested: state.transactionError,
    isSuccess: state.transactionSuccess,
    isError: state.transactionRequest,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addOrder: obj => dispatch(addOrder(obj)),
    transactionPosting: (orderId, productId) =>
      dispatch(transactionPosting(orderId, productId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpsellProduct)
