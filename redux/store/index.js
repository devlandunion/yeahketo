import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const bindMiddleware = middleware => {
  const { composeWithDevTools } = require("redux-devtools-extension")
  return composeWithDevTools(applyMiddleware(...middleware))
}

export const initStore = (initialState = {}, options) => {

  if (options && options.req && options.req.useragent) {
    initialState.variation = options.req.cookies.variation
    initialState.experimentID = options.req.cookies.experimentID
    initialState.trackingID = options.req.cookies.trackingID
    initialState.optimizeID = options.req.cookies.optimizeID
    initialState.userFullAgent = options.req.headers["user-agent"]
    initialState.userAgent = options.req.useragent.isMobile
      ? "mobile"
      : "desktop"
    initialState.query = options.req.query
  }

  return createStore(rootReducer, initialState, bindMiddleware([thunk]))
}
