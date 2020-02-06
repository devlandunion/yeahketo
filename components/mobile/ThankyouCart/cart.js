import React, { useState } from "react"
import styles from "./style"
import {connect} from "react-redux"

function Cart(props) {
  const [items] = useState(props.items)
  function getDate(days) {
    var dayNames = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    )
    var monthNames = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    )
    var now = new Date()
    now.setDate(now.getDate() + days)
    var nowString =
      dayNames[now.getDay()] +
      " , " +
      monthNames[now.getMonth()] +
      " " +
      now.getDate() +
      ", " +
      now.getFullYear()
    return nowString
  }

  function totalPrice() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    try {
      return (
        "$" +
        trueItems()
          .map(item => item.youSavePrice)
          .reduce(reducer)
      )
    } catch {
      return "$0.00"
    }
  }
  function trueItems() {
    const newItems = []
    items.filter(item =>
      props.addOrder.forEach(order =>
        item.id == order ? newItems.push(item) : null
      )
    )
    return newItems
  }
  function ItemsOrdered() {
    return trueItems().map((item, i) => (
      <div key={i}>
        <style jsx>{styles}</style>
        <div className="item">
          <div className="item-content">
            <div className="item-title">
              <div>{item.title}</div>
              <div className="item-count">{item.count}-Mounth Supply</div>
            </div>

            <div className="item-price">${item.youSavePrice}</div>
          </div>
        </div>
        <hr />
        <div className="shipping-text">
          Shipping & Handling: <span className="shipping-price">$0.00</span>
        </div>
      </div>
    ))
  }

  function Info(props) {
    return (
      <>
        <style jsx>{styles}</style>
        <div className="info">
          <h2>{props.header}</h2>
          <div className="item-info">
            <div className="title-info">First Name:</div>
            <div className="content-info">{props.user.firstName}</div>
          </div>
          <div className="item-info">
            <div className="title-info">Last Name:</div>
            <div className="content-info">{props.user.lastName}</div>
          </div>
          <div className="item-info">
            <div className="title-info">Address:</div>
            <div className="content-info">
              {props.user.address1} {props.user.address2}
            </div>
          </div>
          <div className="item-info">
            <div className="title-info">City:</div>
            <div className="content-info">{props.user.city}</div>
          </div>
          <div className="item-info">
            <div className="title-info">State:</div>
            <div className="content-info">{props.user.state}</div>
          </div>
          <div className="item-info">
            <div className="title-info">Zip Code:</div>
            <div className="content-info">{props.user.postalCode}</div>
          </div>
          <div className="item-info">
            <div className="title-info">Phone:</div>
            <div className="content-info">{props.user.phoneNumber}</div>
          </div>
          <div className="item-info">
            <div className="title-info">Email:</div>
            <div className="content-info">{props.user.emailAddress}</div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <style jsx>{styles}</style>
      <div className="total">
        <div className="header">
          <img
            alt="..."
            src="https://yeahketo-funnel-prod.herokuapp.com/static/promo/desktop/images/images/logo.png"
            id="keto-logo"
          />
        </div>
        <hr />
        <div className="thanks">
          <div>
            <strong>THANK YOU FOR YOUR PURCHASE</strong>
          </div>
          <div>
            We hope you enjoy the benefits of <strong>Yeah Keto</strong>
            <br />
            Your order is scheduled to arrive by
          </div>
          <div className="date">
            <strong>{getDate(4)}</strong>
          </div>
        </div>
        <hr />
        <div className="cart">
          <p className="order-reciept">Order Reciept</p>
          <div className="params">
            <div className="left">
              <div className="data-info">
                <div>
                  <strong>Order Placed: {getDate(0)}</strong>
                </div>
                <div>
                  <strong>
                    Order Number: {Math.floor(Math.random() * 100000) + 100000}
                  </strong>
                </div>
                <div>
                  <strong>Items Ordered: </strong>
                </div>
              </div>
              <div className="item-orderd">
                <div className="items">
                  <ItemsOrdered items={props.items} />
                </div>
              </div>
              <div className="total-price">
                <hr />
                <div className="total-item">
                  <div className="total-word">
                    <strong>Total:</strong>
                  </div>
                  <span>{totalPrice()}</span>
                </div>
              </div>
            </div>
            <div className="right">
              <Info header="Shipping Info" user={props.customerInfo} />
              <Info header="Billing Info" user={props.customerInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    customerInfo: state.customerInfo,
    addOrder: state.addOrder
  }
}

export default connect(mapStateToProps)(Cart)
