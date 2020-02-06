export function addOrder(state = [], action) {
  switch (action.type) {
  case "ORDER_ADD":
    state.push(action.product)
    return state

  default:
    return state
  }
}

export function orderPostingError(state = false, action) {
  switch (action.type) {
  case "ORDER_POST_ERROR":
    return action.orderPostingError

  default:
    return state
  }
}

export function orderPostingSuccess(state = false, action) {
  switch (action.type) {
  case "ORDER_POST_SUCCESS":
    return action.orderPostingSuccess

  default:
    return state
  }
}

export function orderPostingRequest(state = false, action) {
  switch (action.type) {
  case "ORDER_POST_REQUEST":
    return action.orderPostingRequest

  default:
    return state
  }
}
