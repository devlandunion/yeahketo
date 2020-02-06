import React, {useState} from "react"
import {Form, Field} from "react-final-form"
import {connect} from "react-redux"
import {preauthPosting} from "../../../redux/actions/preauthPostCard"
import {showSpinner} from "../../../redux/actions/preauthPostCard"
import creditCartType from "credit-card-type"
import Modal from "../../universall/Modal"
import styles from "./Style/style"

const currentDate = new Date()

function CheckOutForm({
  orderPostingError,
  checkedProduct,
  preauthPosting,
  preauthPostingError,
  showSpinner,
  customerInfo,
  userAgent
}) {
  const [isCVVModalOpen, setIsCVVModalOpen] = useState(false)
  const [cardType, setCardType] = useState("")

  const onSubmit = values => {
    showSpinner()
    localStorage.setItem("cardNumber",values.cardNumber)
    localStorage.setItem("expMonth",values.expMonth)
    localStorage.setItem("expYear",values.expYear)
    localStorage.setItem("cardSecurityCode",values.cardSecurityCode)
    localStorage.setItem("checkedProductID",checkedProduct.id)
    localStorage.setItem("orderID",customerInfo.orderId)
    localStorage.setItem("customerID",customerInfo.customerId)
    console.log("CustomerInfo:"+customerInfo.customerId)
    preauthPosting(checkedProduct.id, values, customerInfo, userAgent)
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

  const formatSecurityCode = (value = "") => {
    if (!value) {
      return value
    }
    const regularValue = value.replace(/[^\d]/g, "")
    return regularValue
  }


  const getCreditCardType = (cardNumber = "") => {
    if (creditCartType(cardNumber.substring(0, 4))[0]) {
      return creditCartType(cardNumber.substring(0, 4))[0].type
    }
  }
  return (
    <>
      <style jsx>{styles}</style>
      <Modal
        isOpen={isCVVModalOpen}
        setIsOpen={setIsCVVModalOpen}
        title={"CVV/CID"}
      >
        <div className="cvvContainer">
          <img src={"../../../static/cvv_full.png"} alt="cvv" />
        </div>
      </Modal>

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

          if (!values.expMonth || values.expMonth === "--") {
            errors.expMonth = "Please enter Expiry month."
          }

          if (!values.expYear || values.expYear === "--") {
            errors.expYear = "Please enter Expiry year."
          }

          if ((!values.expMonth || values.expMonth === "--") && (!values.expYear || values.expYear === "--")) {
            errors.expYear = "Please enter Expiry month"
            errors.expMonth = " "
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
          }else if (!values.cardSecurityCode.match(/\d/g)){
            errors.cardSecurityCode = "You can enter only number value."
          }
          return errors
        }}
        render={({handleSubmit, submitting, values}) => (
          <form onSubmit={handleSubmit} className="chk-form">
            <header>
              <div id="limit-offer">Limited Time Only</div>
              <div id="payment-info">Payment Information</div>
              <div id="final-step">Final Step!</div>
            </header>
            <div id="main-part">
              {orderPostingError === true ? (
                <div className="error">
                  <>
                    <h1>Payment validation failed: Processor Declined </h1>
                    <h2>
                      For security resons you must re-enter your credit card
                      information
                    </h2>
                    <p>
                      <i>Tip: you may try another credit card</i>
                    </p>
                  </>
                </div>
              ) : preauthPostingError === true ? (
                <div className="error">
                  <>
                    <h1>Payment validation failed: Processor Declined </h1>
                    <h2>
                      For security resons you must re-enter your credit card
                      information
                    </h2>
                    <p>
                      <i>Tip: you may try input billing fomr once again</i>
                    </p>
                  </>
                </div>
              ) : null}
              <div className="cards">
                <img
                  src="https://yeahketo.com/static/Visa.png"
                  width="50"
                  height="30"
                  alt=""
                  className={`card-visa ${cardType === "visa" &&
                    "checked-card"}`}
                />
                <img
                  src="https://yeahketo.com/static/Mastercard.png"
                  width="50"
                  height="30"
                  alt=""
                  className={`card-mastercard ${cardType === "mastercard" &&
                    "checked-card"}`}
                />
                <img
                  src="https://yeahketo.com/static/amex.png"
                  width="50"
                  height="30"
                  alt=""
                  className={`card-amex ${cardType === "american-express" &&
                    "checked-card"}`}
                />
                <img
                  src="https://yeahketo.com/static/discover.png"
                  width="50"
                  height="30"
                  alt=""
                  className={`card-discover ${cardType === "discover" &&
                    "checked-card"}`}
                />
              </div>
              <Field name="cardNumber" format={e => formatCardNumber(e)}>
                {({input, meta}) => (
                  <div className="inputContainer">
                    <label
                      className={`field-label ${meta.touched &&
                        "label-valid"} ${meta.error &&
                        meta.touched &&
                        "label-invalid"}`}
                      htmlFor="cardNumber"
                    >
                      Card Number*
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
                      className="checkout-field-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="field-error error-position error-card-number">
                        {meta.error}
                      </span>
                    )}
                    {meta.touched && (
                      <span
                        className={`fa check checkout-card ${
                          meta.error
                            ? "fa-times check-invalid checkout-check-invalid"
                            : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>

              <div id="expDate" className="selectContainer checkout-inp-wrap">
                <Field name="expMonth">
                  {({meta}) => (
                    <label
                      className={`formExpiry ${meta.touched &&
                        "label-valid"} ${meta.error &&
                        meta.touched &&
                        "label-invalid"}`}
                    >
                      Expiry Date*:
                    </label>
                  )}
                </Field>
                <Field name="expMonth">
                  {({input, meta}) => (
                    <div className="wrapper">
                      <select {...input} className="field-select-1">
                        <option defaultValue>--</option>
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
                        <span className="field-error error-position error-expiry-month">
                          {meta.error}
                        </span>
                      )}
                      {meta.touched && (
                        <span
                          className={`fa checkout-check checkout-check-2 ${
                            meta.error
                              ? "fa-times check-invalid checkout-check-invalid chk-check-invalid"
                              : "fa-check check-valid"
                          }`}
                        ></span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="expYear">
                  {({input, meta}) => (
                    <div className="wrapper">
                      <select {...input} className="field-select-2">
                        <option defaultValue>--</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                      </select>
                      {meta.error && meta.touched && (
                        <span className="field-error error-position error-expiry-year">
                          {meta.error}
                        </span>
                      )}
                      {meta.touched && (
                        <span
                          className={`fa checkout-check checkout-check-1 ${
                            meta.error
                              ? "fa-times check-invalid checkout-check-invalid chk-check-invalid"
                              : "fa-check check-valid"
                          }`}
                        ></span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <Field name="cardSecurityCode" format={e => formatSecurityCode(e)}>
                {({ input, meta }) => (
                  <div id="cvv-cid" className="inputContainer checkout-inp-wrap cvv-inp-wrap">
                    <label
                      className={`formCvv field-label ${meta.touched &&
                        "label-valid"} ${meta.error &&
                        meta.touched &&
                        "label-invalid"}`}
                    >
                      CVV/CID*
                    </label>
                    <input
                      id="cardSecurityCode"
                      maxLength={cardType === "american-express" ? "4" : "3"}
                      {...input}
                      className="checkout-field-input check-form-inp"
                    />
                    <a className="help" onClick={() => setIsCVVModalOpen(true)}>
                      What is This?
                    </a>
                    {meta.error && meta.touched && (
                      <span className="field-error error-position error-cvv-cid">
                        {meta.error}
                      </span>
                    )}
                    {meta.validating &&(
                      <span className="field-error error-position error-cvv-cid">{meta.error}</span>
                    )}

                    {meta.touched && (
                      <span
                        className={`fa check checkout-cvv ${
                          meta.error
                            ? "fa-times check-invalid checkout-check-invalid"
                            : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>
              <button
                type="submit"
                style={{marginTop: "20px"}}
                disabled={submitting}
                className="button-checkout"
              >
                Rush My Order!
                <span className="button-span">Yes! I want to lose weight</span>
                <span className="arrow-span material-icons">navigation</span>
              </button>
              <img src="../../../static/secure.png" />
            </div>
          </form>
        )}
      />
    </>
  )
}

const mapStateToProps = state => {
  console.log(state.customerInfo)
  return {
    customerInfo: state.customerInfo,
    userAgent: state.userAgent,
    orderPostingError: state.orderPostingError,
    preauthPostingError: state.orderPostingError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    preauthPosting: (checkedProduct, values, customerInfo, userAgent) => dispatch(preauthPosting(checkedProduct, values, customerInfo, userAgent)),
    showSpinner: () => dispatch(showSpinner(true))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckOutForm)
