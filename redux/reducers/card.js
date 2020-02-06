export function preauthPostingError(state = false, action) {
  switch (action.type) {
  case "[preauth] CARD_POST_ERROR":
    return action.preauthPostingError

  default:
    return state
  }
}

export function preauthPostingSuccess(state = false, action) {
  console.log("CARD_POST_SUCCESS!")
  switch (action.type) {
  case "[preauth] CARD_POST_SUCCESS":
    return action.preauthPostingSuccess

  default:
    return state
  }
}

export function preauthPostingRequest(state = false, action) {
  switch (action.type) {
  case "[preauth] CARD_POST_REQUEST":
    return action.preauthPostingRequest

  default:
    return state
  }
}

export function userAgent(state = false, action) {
  switch (action.type) {
  case "userAgent":
    return action.userAgent

  default:
    return state
  }
}
export function userFullAgent(state = false, action) {
  switch (action.type) {
  case "userFullAgent":
    return action.userFullAgent
  default:
    return state
  }
}
