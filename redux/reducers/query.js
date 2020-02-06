export function query(state = false, action) {
  switch (action.type) {
  case "query":
    return action.query

  default:
    return state
  }
}
