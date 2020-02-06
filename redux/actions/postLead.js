import Router from "next/router"
import axios from "axios"

export function leadPostingError(bool) {
  return {
    type: "LEAD_POST_ERROR",
    leadPostingError: bool,
  }
}

export function leadPostingSuccess(bool) {
  return {
    type: "LEAD_POST_SUCCESS",
    leadPostingSuccess: bool,
  }
}


export function leadPostingRequest(bool) {
  return {
    type: "LEAD_POST_REQUEST",
    leadPostingRequest: bool,
  }
}

export function addCustomerInfo(customerInfo) {
  return {
    type: "CUSTOMER_INFO_ADD",
    customerInfo,
  }
}

export function leadPosting(values, userAgent) {

  if(!/[/\D]/.test(values.firstName)){
    values.firstName = "firstName"
  }
  if(!/[/\D]/.test(values.lastName)){
    values.lastName = "lastName"
  }
  if(values.address2==null){
    values.address2 = values.address1
  }
  const params = {
    ...values,
    postalCode: values.postalCode,
    shipFirstName: values.firstName,
    shipLastName: values.lastName,
    shipAddress1: values.address1,
    shipAddress2: values.address2,
    shipCity: values.city,
    shipState: values.state,
    shipCountry: "US",
    country: "US",
    shipPostalCode: values.postalCode,
    campaignId: 25,
  }
  const url = "https://komodo-api-v3.herokuapp.com/api/leads"

  return async dispatch => {
    dispatch(leadPostingRequest(true))
    axios.post(url, params)
      .then(response => {
        if (response.status !== 201) {
          throw new Error("Error")
        }
        if (response.data.result === "ERROR"){
          throw new Error(response.data.result)
        }
        if (userAgent && userAgent === "mobile") {
          Router.push(`/${userAgent}/select-package`)
        } else if (userAgent) {
          Router.push(`/${userAgent}/checkout`)
        }
        dispatch(leadPostingError(false))
        dispatch(leadPostingSuccess(true))
        dispatch(addCustomerInfo(response.data.message))
        return response
      })
      .catch((error) => {
        dispatch(leadPostingError(true))
        dispatch(leadPostingSuccess(false))
        console.log(error)
      })
    dispatch(leadPostingRequest(false))
  }
}
