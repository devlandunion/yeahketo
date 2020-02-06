import axios from "axios"
import { orderPosting } from "./postOrder"

export function preauthPostingError(bool) {
  return {
    type: "[preauth] CARD_POST_ERROR",
    preauthPostingError: bool,
  }
}

export function showSpinner(bool) {
  return {
    type: "SHOW_SPINNER",
    isShowSpinner: bool,
  }
}

export function preauthPostingSuccess(bool) {
  return {
    type: "[preauth] CARD_POST_SUCCESS",
    preauthPostingSuccess: bool,
  }
}

export function preauthPostingRequest(bool) {
  return {
    type: "[preauth] CARD_POST_REQUEST",
    preauthPostingRequest: bool,
  }
}

export function preauthPosting(orderInfo, cardInfo, customerInfo, userAgent) {
  const params = {
    cardNumber: cardInfo.cardNumber.replace(/\D+/g, ""),
    cardSecurityCode: Number(cardInfo.cardSecurityCode),
    cardExpiryDate: `${cardInfo.expMonth}/${cardInfo.expYear}`,
    orderId: customerInfo.orderId,
    customerId: Number(customerInfo.customerId),
  }
  const url = "https://komodo-api-v3.herokuapp.com/api/orders/preauth"

  return async dispatch => {
    dispatch(preauthPostingRequest(true))
    await axios
      .post(url, params)
      .then((response) => {
        dispatch(preauthPostingError(false))
        dispatch(preauthPostingSuccess(true))
        dispatch(orderPosting(orderInfo, cardInfo, customerInfo, userAgent))
        if(response.data.result=="ERROR"){
          dispatch(showSpinner(false))
        }
        return response
      })
      .catch(function(error) {
        dispatch(preauthPostingError(true))
        dispatch(preauthPostingSuccess(false))
        dispatch(showSpinner(false))
        console.log(error)
      })
    dispatch(preauthPostingRequest(false))
  }
}
