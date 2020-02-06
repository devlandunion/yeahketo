import styles from "./Style/promoFormStyle"
import { Form, Field } from "react-final-form"
import { connect } from "react-redux"
import { leadPosting } from "../../../redux/actions/postLead.js"
import GoogleSuggest from "../GooglePlaces/GooglePlaces"
import statesList from "../../../helpers/statesList"
import PromoToUpperBtn from "../UpperSubmitBtn"
import React from "react"

const statesArr = Object.entries(statesList)

function BillingInfoForm({ leadPosting, userAgent }) {
  let place = {}
  const onSubmit = values => {
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
    <GoogleSuggest {...input} {...rest} changePlace={changePlace} />
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

  return (
    <div className="container">
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

          if (!values.state || values.state === "Select State") {
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
          <>
            <form onSubmit={handleSubmit} className="promo-form">
              <div className="main-part">
                <Field name="firstName">
                  {({ input, meta }) => (
                    <div className="desktop-field firstName">
                      <label
                        className={` ${meta.touched && "label-valid"} ${meta.error &&
                          meta.touched &&
                          "label-invalid"}`}
                        htmlFor="fname"
                      >
                        First Name*
                      </label>
                      <input
                        {...input}
                        className={`field-input ${meta.touched && "field-valid"} ${meta.error &&
                          meta.touched &&
                          "field-invalid"}`}
                        id="fname"
                        placeholder="First Name*"
                      />
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
                  )}
                </Field>
                <Field name="lastName">
                  {({ input, meta }) => (
                    <div className="desktop-field lastName">
                      <label
                        className={` ${meta.touched && "label-valid"} ${meta.error &&
                          meta.touched &&
                          "label-invalid"}`}
                        htmlFor="lname"
                      >
                        Last name*
                      </label>
                      <input
                        {...input}
                        className={`field-input ${meta.touched && "field-valid"} ${meta.error &&
                          meta.touched &&
                          "field-invalid"}`}
                        id="lname"
                        placeholder="Last Name*"
                      />
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
                  )}
                </Field>
                <Field
                  name="address1"
                  component={GoogleSuggestInput}
                  labelName="Address Line 1*"
                ></Field>
                <Field name="address2">
                  {({ input }) => (
                    <div className="desktop-field address-line-2">
                      <label
                        htmlFor="adress"
                      >
                        Address Line 2
                      </label>
                      <input
                        {...input}
                        className={"field-input"}
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        id="adress"
                      />
                    </div>
                  )}
                </Field>
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
                      <div className="desktop-field city-field">
                        <label
                          className={` ${meta.touched && "label-valid"} ${meta.error &&
                            meta.touched &&
                            "label-invalid"}`}
                          htmlFor="city"
                        >
                          City*
                        </label>
                        <input
                          {...input}
                          // value={place.address_components[1].long_name}
                          className={`field-input ${(meta.touched || meta.dirty) && "field-valid"} ${meta.error &&
                            meta.touched &&
                            input.value === "" &&
                            "field-invalid"}`}
                          placeholder="City"
                          id="city"
                        />

                        {meta.error && meta.touched && input.value === "" && (
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
                    if (!meta.dirty && !meta.modified) {
                      if (
                        place.address_components &&
                        place.address_components.find(
                          c => c.types.indexOf("administrative_area_level_1") >= 0
                        )
                      ) {
                        input.value = place.address_components.find(
                          c => c.types.indexOf("administrative_area_level_1") >= 0
                        ).short_name
                        input.onChange(input.value)
                        meta.invalid = false
                        meta.touched = true
                        meta.error = false
                      }
                    }
                    return (
                      <div className="desktop-field state">
                        <label
                          className={` ${meta.touched && "label-valid"} ${meta.error &&
                            meta.touched &&
                            "label-invalid"}`}
                          htmlFor="state"
                        >
                          State*
                        </label>
                        <select
                          {...input}
                          className={`field-input field-select ${(meta.touched || meta.dirty) &&
                            "field-valid"} ${meta.error && meta.touched && "field-invalid"}`}
                          placeholder="Select State"
                          id="state"
                        >
                          <option defaultValue key="00">
                            Select State
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
                        <label
                          className={` ${meta.touched && "label-valid"} ${meta.error &&
                            meta.touched &&
                            "label-invalid"}`}
                          htmlFor="zip"
                        >
                          Zip Code*
                        </label>
                        <input
                          {...input}
                          className={`field-input ${meta.touched && "field-valid"} ${meta.error &&
                            meta.touched &&
                            "field-invalid"}`}
                          type="text"
                          maxLength="5"
                          placeholder="ZIP Code"
                          id="zip"
                        />
                        {meta.error && meta.touched && (
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
                      <label
                        className={` ${meta.touched && "label-valid"} ${meta.error &&
                          meta.touched &&
                          "label-invalid"}`}
                        htmlFor="number"
                      >
                        Phone number*
                      </label>
                      <input
                        {...input}
                        className={`field-input ${meta.touched && "field-valid"} ${meta.error &&
                          meta.touched &&
                          "field-invalid"}`}
                        placeholder="Example: (123) 555-6789"
                        id="number"
                        maxLength="14"
                      />
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
                  )}
                </Field>
                <Field name="emailAddress">
                  {({ input, meta }) => (
                    <div className="desktop-field">
                      <label
                        className={` ${meta.touched && "label-valid"} ${meta.error &&
                          meta.touched &&
                          "label-invalid"}`}
                        htmlFor="emailAddress"
                      >
                        Email*
                      </label>
                      <input
                        {...input}
                        className={`field-input ${meta.touched && "field-valid"} ${meta.error &&
                          meta.touched &&
                          "field-invalid"}`}
                        placeholder="Example: email@somewhere.com"
                        id="emailAddress"
                        type="text"
                      />
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
                  )}
                </Field>
              </div>
              <PromoToUpperBtn text="Rush my order!" submitting={submitting} />
            </form>
          </>
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
