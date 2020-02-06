import React, {useState} from "react"
import {Form, Field} from "react-final-form"
import {connect} from "react-redux"
import {preauthPosting} from "../../../redux/actions/preauthPostCard"
import creditCartType from "credit-card-type"

import styles from "./Style/checkoutFormStyle"
import UpperSubmitBtn from "../../mobile/UpperSubmitBtn"

const currentDate = new Date()

function CheckOutForm({
  orderPostingError,
  preauthPosting,
  customerInfo,
  addOrder,
  userAgent
}) {
  const [cardType, setCardType] = useState("")
  const onSubmit = async values => {
    await preauthPosting(addOrder[0], values, customerInfo, userAgent)
  }
  const formatSecurityCode = (value = "") => {
    if (!value) {
      return value
    }
    const regularValue = value.replace(/[^\d]/g, "")
    return regularValue
  }
  const formatCardNumber = (value = "") => {
    if (!value) {
      return value
    }
    const clearValue = value.replace(/[^\d]/g, "")
    let nextValue =
      `${clearValue.slice(0, 4)} ${clearValue.slice(4, 8)} ` +
      `${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`

    if (cardType === "american-express") {
      nextValue =
        `${clearValue.slice(0, 4)} ${clearValue.slice(4, 10)} ` +
        `${clearValue.slice(10, 15)}`
    }
    return nextValue.trim()
  }
  const getCreditCardType = (cardNumber = "") => {
    if (creditCartType(cardNumber.substring(0, 4))[0]) {
      return creditCartType(cardNumber.substring(0, 4))[0].type
    }
  }
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}

        if (!values.cardNumber) {
          errors.cardNumber = "Please enter your Card Number."
        } else if (cardType === "american-express") {
          if (
            values.cardNumber.match(/\d/g) &&
            values.cardNumber.match(/\d/g).length !== 15
          ) {
            errors.cardNumber = "Card number should be 15 digits."
          }
          // } else if (
          //   !cardType &
          //   (cardType !== "american-express") &
          //   (cardType !== "visa") &
          //   (cardType !== "mastercard") &
          //   (cardType !== "discover")
          // ) {
          //   errors.cardNumber = "Card type is not supported.";
        } else if (
          values.cardNumber.match(/\d/g) &&
          values.cardNumber.match(/\d/g).length !== 16
        ) {
          errors.cardNumber = "Card number should be 16 digits."
        }
        if (!values.expMonth || values.expMonth === "MM") {
          errors.expMonth = "Please enter Expiry month."
        }

        if (!values.expYear || values.expYear === "YY") {
          errors.expMonth = "Please enter Expiry year."
        }

        if (
          (!values.expMonth || values.expMonth === "MM") &&
          (!values.expYear || values.expYear === "YY")
        ) {
          errors.expYear = "Please enter Expiry year."
          errors.expMonth = "Please enter Expiry month."
        }

        if (
          Number(values.expMonth) < currentDate.getMonth() &&
          values.expYear ===
            currentDate
              .getFullYear()
              .toString()
              .substr(-2)
        ) {
          errors.expMonth = "Card has expired."
        }

        if (!values.cardSecurityCode) {
          errors.cardSecurityCode = "Please enter your Security Code."
        } else if (cardType === "american-express") {
          if (
            values.cardSecurityCode.match(/\d/g) &&
            values.cardSecurityCode.match(/\d/g).length !== 4
          ) {
            errors.cardSecurityCode = "Security code should be 4 digits."
          }
        } else if (
          values.cardSecurityCode.match(/\d/g) &&
          values.cardSecurityCode.match(/\d/g).length !== 3
        ) {
          errors.cardSecurityCode = "Security code should be 3 digits."
        }

        return errors
      }}
      render={({
        handleSubmit,
        submitting,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <style jsx>{styles}</style>
          {orderPostingError === true ? (
            <div className="error">
              <>
                <h1>Payment validation failed: Processor Declined </h1>
                <h2>
                  For security reasons you must re-enter your credit card
                  information
                </h2>
                <p>
                  <i>Tip: you may try another credit card</i>
                </p>
              </>
            </div>
          ) : null}
          <div className="cards">
            <img
              src="https://yeahketo.com/static/Visa.png"
              width="81"
              height="51"
              alt=""
              className={`card-visa ${cardType === "visa" && "checked-card"}`}
            />
            <img
              src="https://yeahketo.com/static/Mastercard.png"
              width="81"
              height="51"
              alt=""
              className={`card-mastercard ${cardType === "mastercard" &&
                "checked-card"}`}
            />
            <img
              src="https://yeahketo.com/static/amex.png"
              width="81"
              height="51"
              alt=""
              className={`card-amex ${cardType === "american-express" &&
                "checked-card"}`}
            />
            <img
              src="https://yeahketo.com/static/discover.png"
              width="81"
              height="51"
              alt=""
              className={`card-discover ${cardType === "discover" &&
                "checked-card"}`}
            />
          </div>

          <Field name="cardNumber" format={e => formatCardNumber(e)}>
            {({input, meta}) => (
              <div className="inputContainer">
                <label
                  className={`${meta.touched && "label-valid"} ${meta.error &&
                    meta.touched &&
                    "label-invalid"}`}
                  htmlFor="cardNumber"
                >
                  Card Number*:
                </label>
                {values.cardNumber
                  ? setCardType(getCreditCardType(values.cardNumber))
                  : setCardType("")}
                <input
                  {...input}
                  type="text"
                  maxLength={cardType === "american-express" ? "17" : "19"}
                  id="cardNumber"
                  placeholder=" •••• •••• •••• ••••"
                  className={`field-input ${meta.touched &&
                    "field-valid"} ${meta.error &&
                    meta.touched &&
                    "field-invalid"}`}
                />
                {meta.error && meta.touched && (
                  <span className="field-error">{meta.error}</span>
                )}
                {meta.touched && (
                  <span
                    className={`fa check ${
                      meta.error
                        ? "fa-times check-invalid"
                        : "fa-check check-valid"
                    }`}
                  ></span>
                )}
              </div>
            )}
          </Field>

          <div className="selectContainer">
            <Field name="expMonth">
              {({meta}) => (
                <label
                  className={`${meta.touched && "label-valid"} ${meta.error &&
                    meta.touched &&
                    "label-invalid"}`}
                >
                  Expiry Date*:
                </label>
              )}
            </Field>
            <div className="expDate">
              <Field name="expMonth">
                {({input, meta}) => (
                  <div className="field-select-1">
                    <select {...input}>
                      <option defaultValue>MM</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                    {meta.error && meta.touched && (
                      <span className="field-error">{meta.error}</span>
                    )}
                    {meta.touched && (
                      <span
                        className={`fa checkout-check checkout-check-1 ${
                          meta.error
                            ? "fa-times check-invalid"
                            : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="expYear">
                {({input, meta}) => (
                  <div className="field-select-2">
                    <select {...input}>
                      <option defaultValue>YY</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                    </select>
                    {meta.error && meta.touched && (
                      <span className="field-error">{meta.error}</span>
                    )}
                    {meta.touched && (
                      <span
                        className={`fa checkout-check checkout-check-2 ${
                          meta.error
                            ? "fa-times check-invalid"
                            : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>
            </div>
          </div>
          <div className="cardSecurityCode">
            <Field name="cardSecurityCode" format={e => formatSecurityCode(e)}>
              {({input, meta}) => (
                <div id="cvv-cid" className="inputContainer">
                  <label
                    className={`${meta.touched && "label-valid"} ${meta.error &&
                      meta.touched &&
                      "label-invalid"}`}
                  >
                    CVV/CID*:
                  </label>
                  <input
                    maxLength={cardType === "american-express" ? "4" : "3"}
                    {...input}
                    className={`field-input ${meta.touched &&
                      "field-valid"} ${meta.error &&
                      meta.touched &&
                      "field-invalid"}`}
                  />
                  {meta.error && meta.touched && (
                    <span className="field-error">{meta.error}</span>
                  )}
                  {meta.touched && (
                    <span
                      className={`fa check ${
                        meta.error
                          ? "fa-times check-invalid"
                          : "fa-check check-valid"
                      }`}
                    ></span>
                  )}
                </div>
              )}
            </Field>
            <img className="cvvHelpImg" src="../../../static/cvv.png" />
          </div>
          <UpperSubmitBtn text="Complete Checkout" submitting={submitting} />
        </form>
      )}
    />
  )
}

const mapStateToProps = state => {
  return {
    customerInfo: state.customerInfo,
    addOrder: state.addOrder,
    userAgent: state.userAgent,
    orderPostingError: state.orderPostingError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    preauthPosting: (checkedProduct, values, customerInfo, userAgent) =>
      dispatch(preauthPosting(checkedProduct, values, customerInfo, userAgent))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckOutForm)
