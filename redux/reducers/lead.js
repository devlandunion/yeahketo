export function leadPostingError(state = false, action) {
  switch (action.type) {
  case "LEAD_POST_ERROR":
    return action.leadPostingError

  default:
    return state
  }
}

export function leadPostingSuccess(state = false, action) {
  switch (action.type) {
  case "LEAD_POST_SUCCESS":
    return action.leadPostingSuccess

  default:
    return state
  }
}

export function isShowSpinner(state = false, action) {
  switch (action.type) {
  case "SHOW_SPINNER":
    return action.isShowSpinner

  default:
    return state
  }
}

export function leadPostingRequest(state = false, action) {
  switch (action.type) {
  case "LEAD_POST_REQUEST":
    return action.leadPostingRequest

  default:
    return state
  }
}

export function customerInfo(state = [], action) {
  switch (action.type) {
  case "CUSTOMER_INFO_ADD":
    return action.customerInfo

  default:
    return state
  }
}
