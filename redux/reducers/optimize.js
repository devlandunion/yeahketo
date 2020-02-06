export function variation(state = false, action) {
  switch (action.type) {
  case "variation":
    return action.variation

  default:
    return state
  }
}
export function experimentID(state = false, action) {
  switch (action.type) {
  case "experimentID":
    return action.experimentID

  default:
    return state
  }
}
export function trackingID(state = false, action) {
  switch (action.type) {
  case "trackingID":
    return action.trackingID

  default:
    return state
  }
}
export function optimizeID(state = false, action) {
  switch (action.type) {
  case "optimizeID":
    return action.optimizeID

  default:
    return state
  }
}
