export function transactionError(state = false, action) {
  switch (action.type) {
  case "TRANSACTION_POST_ERROR":
    return action.transactionError

  default:
    return state
  }
}

export function transactionSuccess(state = false, action) {
  switch (action.type) {
  case "TRANSACTION_POST_SUCCESS":
    return action.transactionSuccess

  default:
    return state
  }
}

export function transactionRequest(state = false, action) {
  switch (action.type) {
  case "TRANSACTION_POST_REQUEST":
    return action.transactionRequest

  default:
    return state
  }
}
