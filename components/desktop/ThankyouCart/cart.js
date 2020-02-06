import React, { useState } from "react"
import styles from "./style"
import { connect } from "react-redux"

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
        Math.ceil(
          trueItems()
            .map(item => item.youSavePrice)
            .reduce(reducer)
        )
      )
    } catch {
      return 0
    }
  }

  function trueItems() {
    const newItems = []
    items.filter(item =>
      props.addOrder.forEach(order => (item.id == order ? newItems.push(item) : null))
    )
    return newItems
  }
  function ItemsOrdered() {
    return trueItems().map((item, i) => (
      <div key={i}>
        <style jsx>{styles}</style>
        <div className="item">
          <div className="item-image">
            <img alt="item" src={item.src} />
          </div>
          <div className="item-content">
            <div className="item-title">
              <div className="item-title-top">{item.title}</div>
              <div className="item-count">{item.count} Bottles</div>
            </div>
            <div className="item-price">${item.youSavePrice}</div>
          </div>
        </div>
      </div>
    ))
  }

  function Info(props) {
    return (
      <>
        <style jsx>{styles}</style>
        <div className="info">
          <h2 className={`list-h ${props.className}`}>{props.header}</h2>
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
        <div>
          <div className="header thank-cong">Congratulations!</div>
          <div className="subheader">
            You've taken the first step to better health and wellness. We are confident that you
            will enjoy the benefits of Yeah Keto products.
          </div>
        </div>
        <div className="cart">
          <div className="order-reciept">Order Reciept</div>
          <div className="params">
            <div className="left">
              <div className="data-info">
                <div>
                  <strong>Order Placed:</strong>
                  {getDate(0)}
                </div>
                <div>
                  <strong>Order Number:</strong>
                  {Math.floor(Math.random() * 100000) + 100000}
                </div>
                <div style={{ marginTop: "20px" }}>
                  <strong>Estimated Delivery Date:</strong>
                  <br />
                  {getDate(4)}
                </div>
              </div>
              <div className="item-orderd">
                <div className="head-item-orderd">Items Ordered</div>
                <div className="items">
                  <ItemsOrdered items={props.items} />
                </div>
              </div>
              <div className="total-price">
                <div className="total-item">
                  <div className="total-word">Sub Total:</div>
                  {totalPrice()}
                </div>
                <div className="total-item">
                  <div className="total-word">Shipping & handling:</div>
                  <div className="free">FREE</div>
                </div>
                <div className="total-item">
                  <div className="total-word">Total:</div>
                  {totalPrice()}
                </div>
              </div>
            </div>
            <div className="right">
              <Info header="Shipping Info" className="list-h1" user={props.customerInfo} />
              <Info header="Billing Info" className="list-h2" user={props.customerInfo} />
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
    addOrder: state.addOrder,
  }
}

export default connect(mapStateToProps)(Cart)
