export function creditInfo(state = {}, action) {
  switch (action.type) {
  case "ADD_CREDIT_INFO":
    return action.creditInfo

  default:
    return state
  }
}
