import Router from "next/router"
import axios from "axios"

export function orderPostingError(bool) {
  return {
    type: "ORDER_POST_ERROR",
    orderPostingError: bool,
  }
}

export function orderPostingSuccess(bool) {
  return {
    type: "ORDER_POST_SUCCESS",
    orderPostingSuccess: bool,
  }
}

export function orderPostingRequest(bool) {
  return {
    type: "ORDER_POST_REQUEST",
    orderPostingRequest: bool,
  }
}

export function addOrder(product) {
  return {
    type: "ORDER_ADD",
    product,
  }
}

export function orderPosting(orderInfo, cardInfo, customerInfo, userAgent) {
  const params = {
    product1_id: orderInfo,
    cardNumber: cardInfo.cardNumber.replace(/\D+/g, ""),
    cardSecurityCode: Number(cardInfo.cardSecurityCode),
    cardExpiryDate: `${cardInfo.expMonth}/${cardInfo.expYear}`,

    orderId: customerInfo.orderId,
    customerId: Number(customerInfo.customerId),
    campaignId: 25,
    cardMonth: cardInfo.expMonth,
    cardYear: cardInfo.expYear,

    emailAddress: customerInfo.emailAddress,
    phoneNumber: customerInfo.phoneNumber,
    firstName: customerInfo.firstName,
    lastName: customerInfo.lastName,
    address1: customerInfo.address1,
    address2: customerInfo.address2,
    city: customerInfo.city,
    state: customerInfo.state,
    country: "US",
    postalCode: customerInfo.postalCode,
    shipFirstName: customerInfo.firstName,
    shipLastName: customerInfo.lastName,
    shipAddress1: customerInfo.address1,
    shipAddress2: customerInfo.address2,
    shipCity: customerInfo.city,
    shipState: customerInfo.state,
    shipCountry: "US",
    shipPostalCode: customerInfo.postalCode,
  }
  const url = "https://komodo-api-v3.herokuapp.com/api/orders/import"
  return async dispatch => {
    dispatch(orderPostingRequest(true))
    await axios
      .post(url, params)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Error")
        }
        if (response.data.result === "ERROR"){
          throw new Error(response.data.result)
        }
        dispatch(orderPostingError(false))
        dispatch(orderPostingSuccess(true))
        if (userAgent && userAgent === "desktop") {
          dispatch(addOrder(params.product1_id))
        }
        Router.push(`/${userAgent}/upsell-1`)
        return response
      })
      .catch(function(error) {
        dispatch(orderPostingError(true))
        dispatch(orderPostingSuccess(false))
        console.log(error)
      })
    dispatch(orderPostingRequest(false))
  }
}
