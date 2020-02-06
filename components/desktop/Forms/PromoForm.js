import React, { useState } from "react"
import styles from "./Style/style"
import { Form, Field } from "react-final-form"
import { connect } from "react-redux"
import { leadPosting } from "../../../redux/actions/postLead.js"
import GoogleSuggest from "../../universall/GooglePlaces/GooglePlaces"
import statesList from "../../../helpers/statesList"
import Timer from "../../universall/Timer/Timer"
import { Waypoint } from "react-waypoint"

const statesArr = Object.entries(statesList)

function AnimatedArrow({ refFunction }) {
  const [animate, setAnimate] = useState(false)

  refFunction((bool) => {
    setAnimate(bool)
  })

  return (
    <img
      alt=""
      src="../../../../static/s8-arrow.png"
      className={`s1-animate-arrow ${animate ? "sec1-arr-wo" : ""}`}
      style={{
        transform: "rotate(300deg)",
        position: "absolute",
        top: 129,
        left: "74%",
        ...(animate
          ? {
            transform: "rotate(317deg)",
            transition: "all 1s ease 0s",
            top: 226,
            left: 253,
            zIndex: 9,
          }
          : {}
        )
      }}
    />
  )
}

function BillingInfoForm({ leadPosting, userAgent }) {
  // const [showArrow, setShowArrow] = useState(false);
  let place = {}

  const onSubmit = values => {
    localStorage.setItem("firstName",values.firstName)
    localStorage.setItem("lastName",values.lastName)
    localStorage.setItem("address1",values.address1)
    localStorage.setItem("address2",values.address2)
    localStorage.setItem("city",values.city)
    localStorage.setItem("state",values.state)
    localStorage.setItem("postalCode",values.postalCode)
    localStorage.setItem("emailAddress",values.emailAddress)
    localStorage.setItem("phoneNumber","+1" + values.phoneNumber.replace(/\D+/g, ""))
    leadPosting(
      {
        ...values,
        phoneNumber: "+1" + values.phoneNumber.replace(/\D+/g, "")
      },
      userAgent
    )
  }

  const changePlace = newPlace => (place = newPlace)

  const GoogleSuggestInput = ({ input, ...rest }) => (
    <GoogleSuggest key={1} {...input} {...rest} changePlace={changePlace} />
  )

  const handleZipChange = (value = "") => {
    return value.replace(/\D+/g, "")
  }

  const handleMobileChange = value => {
    if (!value) {
      return value
    }
    const onlyNums = value.replace(/[^\d]/g, "")
    if (onlyNums.length <= 3) {
      return `(${onlyNums}`
    }
    if (onlyNums.length <= 6) {
      return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`
    }
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
  }

  var arrowHandler = () => {}

  const onScroll = (e) => {
    if (e.currentPosition === "inside") {
      // setAnimate(true);
      arrowHandler(true)
    } else {
      arrowHandler(false)
      // setAnimate(false);
    }
  }

  return (
    <div className="form">
      {/* <header>Limit my offer</header> */}
      <style jsx>{styles}</style>

      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {}
          if (!values.firstName) {
            errors.firstName = "Please enter your first name."
          }
          if (!values.lastName) {
            errors.lastName = "Please enter your last name."
          }
          if (!values.address1 || values.address1.length === 0) {
            errors.address1 = "Please enter your street."
          }
          if (!values.city) {
            errors.city = "Please enter your city."
          }

          if (!values.state || values.state.trim().toLowerCase() === "state") {
            errors.state = "Please enter your state."
          }

          if (values.state && values.state.trim().toLowerCase() === "state") {
            errors.state = "Please enter your state."
          }

          if (!values.postalCode) {
            errors.postalCode = "Please enter your zip code."
          }

          if (!values.phoneNumber) {
            errors.phoneNumber = "Please enter your phone number."
          } else if (
            values.phoneNumber.match(/\d/g) &&
            values.phoneNumber.match(/\d/g).length !== 10
          ) {
            errors.phoneNumber =
              "Please enter a valid 10-digit US phone number (must not include spaces or special characters)."
          } else if (values.phoneNumber === "(") {
            errors.phoneNumber =
              "Please enter a valid 10-digit US phone number (must not include spaces or special characters)."
          }
          if (!values.emailAddress) {
            errors.emailAddress = "Please enter your email address."
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)) {
            errors.emailAddress = "Please enter valid email address."
          }
          return errors
        }}
        render={({ handleSubmit, submitting }) => (
          <form
            onSubmit={handleSubmit}
            className="col-xs-9 promo-form"
            autoComplete="off"
          >
            <Waypoint onEnter={onScroll} onLeave={onScroll} />
            <div className="s1-seal">
              <img src="../../../static/s1-seal.png" alt="..."/>
            </div>
            <header>
              <div id="limit-offer">
                Hurry! Limited Time Offer
                <span className="timer">
                  <Timer initialTimeSeconds={300} />
                </span>
              </div>
              <div className="yellow-header" id="payment-info">
                Tell Us Where To Send
              </div>
              <div className="silver-header" id="final-step">
                Your Bottle
              </div>
            </header>
            <div id="main-part">
              <Field name="firstName">
                {({ input, meta }) => (
                  <div className="desktop-field">
                    <input
                      {...input}
                      placeholder="First name"
                      className={`field-input ${(meta.touched || meta.dirty) &&
                        "field-valid"} ${meta.error &&
                        (meta.touched || meta.dirty) &&
                        "field-invalid"}`}
                      id="fname"
                    />
                    {meta.error && (meta.touched || meta.dirty) && (
                      <span className="field-error">{meta.error}</span>
                    )}
                    {(meta.touched || meta.dirty) && (
                      <span
                        className={`fa check ${
                          meta.error ? "fa-times check-invalid" : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <div className="desktop-field">
                    <input
                      {...input}
                      placeholder="Last name"
                      className={`field-input ${(meta.touched || meta.dirty) &&
                        "field-valid"} ${meta.error &&
                        (meta.touched || meta.dirty) &&
                        "field-invalid"}`}
                      id="lname"
                    />
                    {meta.error && (meta.touched || meta.dirty) && (
                      <span className="field-error">{meta.error}</span>
                    )}
                    {(meta.touched || meta.dirty) && (
                      <span
                        className={`fa check ${
                          meta.error ? "fa-times check-invalid" : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>

              <AnimatedArrow refFunction={r => arrowHandler = r} />
              {/* <img
                alt=""
                src="../../../../static/s8-arrow.png"
                className={`s1-animate-arrow ${false ? "sec1-arr-wo" : ""}`}
              /> */}
              <Field
                name="address1"
                key={1}
                render={params => (
                  <GoogleSuggestInput key={1} {...params} />
                )}
              />

              <Field name="address2">
                {({ input, meta }) => (
                  <div className="desktop-field">
                    <input
                      {...input}
                      className={`field-input ${meta.dirty ? "field-valid" : ""} `}
                      placeholder="Apartment, suite, unit, building, floor, etc."
                      id="adress"
                    />{(meta.dirty) && (
                      <span
                        className={`fa check ${
                          meta.error ? "fa-times check-invalid" : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>

              {/* <Field name="city" component={GoogleSuggestInput}></Field> */}
              <Field name="city">
                {({ input, meta }) => {
                  if (!meta.dirty && !meta.modified) {
                    if (
                      place.address_components &&
                      place.address_components.find(c => c.types.indexOf("locality") >= 0)
                    ) {
                      input.value = place.address_components.find(
                        c => c.types.indexOf("locality") >= 0
                      ).long_name
                      input.onChange(input.value)
                      meta.invalid = false
                      meta.touched = true
                      meta.error = false
                    }
                  }

                  return (
                    <div className="desktop-field">
                      <input
                        {...input}
                        // value={place.address_components[1].long_name}
                        className={`field-input ${(meta.touched || meta.dirty) &&
                          "field-valid"} ${meta.error &&
                          (meta.touched || meta.dirty) &&
                          input.value === "" &&
                          "field-invalid"}`}
                        placeholder="City"
                        id="city"
                      />

                      {meta.error && (meta.touched || meta.dirty) && input.value === "" && (
                        <span className="field-error">{meta.error}</span>
                      )}
                      {(meta.touched || meta.dirty) && (
                        <span
                          className={`fa check ${
                            meta.error && input.value === ""
                              ? "fa-times check-invalid"
                              : "fa-check check-valid"
                          }`}
                        ></span>
                      )}
                    </div>
                  )
                }}
              </Field>
              <Field name="state">
                {({ input, meta }) => {

                  var foundState = place.address_components && place.address_components.find(c => {
                    return c.types.indexOf("administrative_area_level_1") >= 0
                  })

                  if (foundState) {
                    const stateValue = foundState.short_name
                    input.value = stateValue

                    if (statesArr.flat().includes(stateValue)) {
                      input.onChange(input.value)
                      meta.invalid = false
                      meta.touched = true
                      meta.error = false
                    }
                  }

                  // if (!meta.dirty && !meta.modified) {
                  //   var foundState = place.address_components && place.address_components.find(c => {
                  //     return c.types.indexOf("administrative_area_level_1") >= 0
                  //   })

                  //   if (foundState) {
                  //     const stateValue = foundState.short_name
                  //     input.value = stateValue;

                  //     if (statesArr.flat().includes(stateValue)) {
                  //       input.onChange(input.value)
                  //       meta.invalid = false;
                  //       meta.touched = true;
                  //       meta.error = false;
                  //     }
                  //   }
                  // }

                  return (
                    <div className="desktop-field">
                      <select
                        {...input}
                        className={`field-input field-select ${meta.touched &&
                          "field-valid"} ${meta.error && meta.touched && "field-invalid"}`}
                        placeholder="State"
                        id="state"
                      >
                        <option defaultValue key="00">
                          State
                        </option>
                        {statesArr.map((state, idx) => (
                          <option key={idx} value={state[0]}>
                            {state[1]}
                          </option>
                        ))}
                      </select>
                      {meta.error && meta.touched && (
                        <span className="field-error">{meta.error}</span>
                      )}
                      {meta.touched && (
                        <span
                          className={`fa check ${
                            meta.error ? "fa-times check-invalid" : "fa-check check-valid"
                          }`}
                        ></span>
                      )}
                    </div>
                  )
                }}
              </Field>
              <Field name="postalCode" format={e => handleZipChange(e)}>
                {({ input, meta }) => {
                  if (!meta.dirty && !meta.modified) {
                    if (
                      place.address_components &&
                      place.address_components.find(c => c.types.indexOf("postal_code") >= 0)
                    ) {
                      input.value = place.address_components.find(
                        c => c.types.indexOf("postal_code") >= 0
                      ).short_name
                      input.onChange(input.value)
                      meta.invalid = false
                      meta.touched = true
                      meta.error = false
                    }
                  }
                  return (
                    <div className="desktop-field">
                      <input
                        {...input}
                        className={`field-input ${(meta.touched || meta.dirty) &&
                          "field-valid"} ${meta.error &&
                          (meta.touched || meta.dirty) &&
                          "field-invalid"}`}
                        type="text"
                        maxLength="5"
                        placeholder="ZIP Code"
                        id="zip"
                      />
                      {meta.error && (meta.touched || meta.dirty) && (
                        <span className="field-error">{meta.error}</span>
                      )}
                      {(meta.touched || meta.dirty) && (
                        <span
                          className={`fa check ${
                            meta.error ? "fa-times check-invalid" : "fa-check check-valid"
                          }`}
                        ></span>
                      )}
                    </div>
                  )
                }}
              </Field>
              <Field name="phoneNumber" format={e => handleMobileChange(e)}>
                {({ input, meta }) => (
                  <div className="desktop-field">
                    <input
                      {...input}
                      className={`field-input ${(meta.touched || meta.dirty) &&
                        "field-valid"} ${meta.error &&
                        (meta.touched || meta.dirty) &&
                        "field-invalid"}`}
                      placeholder="Example: (123) 555-6789"
                      id="number"
                      maxLength="14"
                    />
                    {meta.error && (meta.touched || meta.dirty) && (
                      <span className="field-error">{meta.error}</span>
                    )}
                    {(meta.touched || meta.dirty) && (
                      <span
                        className={`fa check ${
                          meta.error ? "fa-times check-invalid" : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="emailAddress">
                {({ input, meta }) => (
                  <div className="desktop-field">
                    <input
                      {...input}
                      className={`field-input ${(meta.touched || meta.dirty) &&
                        "field-valid"} ${meta.error &&
                        (meta.touched || meta.dirty) &&
                        "field-invalid"}`}
                      placeholder="Example: email@somewhere.com"
                      id="email"
                      type="text"
                    />
                    {meta.error && (meta.touched || meta.dirty) && (
                      <span className="field-error">{meta.error}</span>
                    )}
                    {(meta.touched || meta.dirty) && (
                      <span
                        className={`fa check ${
                          meta.error ? "fa-times check-invalid" : "fa-check check-valid"
                        }`}
                      ></span>
                    )}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" style={{ width: "100%" }} disabled={submitting}>
                  Rush My Order!
                  <span className="button-span">Yes! I want to lose weight</span>
                  <span className="arrow-span material-icons">navigation</span>
                </button>
              </div>
              <img className="secure" src="../../../static/secure.png" />
            </div>
          </form>
        )}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    id: state.leadId,
    isRequested: state.leadPostingRequest,
    isSuccess: state.leadPostingSuccess,
    isError: state.leadPostingError,
    userAgent: state.userAgent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    leadPosting: (lead, userAgent) => dispatch(leadPosting(lead, userAgent))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingInfoForm)
