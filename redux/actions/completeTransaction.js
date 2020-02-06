import axios from "axios"

export function transactionSuccess(bool) {
  return {
    type: "TRANSACTION_POST_SUCCESS",
    transactionSuccess: bool,
  }
}

export function transactionRequest(bool) {
  return {
    type: "TRANSACTION_POST_REQUEST",
    transactionRequest: bool,
  }
}

export function transactionError(bool) {
  return {
    type: "TRANSACTION_POST_ERROR",
    transactionError: bool,
  }
}

export function transactionPosting(orderId, productId) {
  const params = {
    orderId: orderId,
    productId: productId,
  }
  const url = "https://komodo-api-v3.herokuapp.com/api/orders"
  return async dispatch => {
    dispatch(transactionRequest(true))
    await axios
      .put(url, params)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Error")
        }
        dispatch(transactionError(false))
        dispatch(transactionSuccess(true))
        return response
      })
      .catch(function(error) {
        dispatch(transactionError(true))
        dispatch(transactionSuccess(false))
        console.log(error)
      })
    dispatch(transactionRequest(false))
  }
}
