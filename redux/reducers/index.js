import {combineReducers} from "redux"
import {
  isShowSpinner,
  leadPostingRequest,
  leadPostingSuccess,
  leadPostingError,
  customerInfo
} from "./lead.js"
import {
  addOrder,
  orderPostingError,
  orderPostingSuccess,
  orderPostingRequest
} from "./order.js"
import {creditInfo} from "./creditInfo.js"

import {
  transactionError,
  transactionSuccess,
  transactionRequest
} from "./transaction.js"

import {
  preauthPostingError,
  preauthPostingSuccess,
  preauthPostingRequest,
  userFullAgent,
  userAgent
} from "./card"

import {variation, experimentID, trackingID, optimizeID} from "./optimize.js"

import {query} from "./query.js"

export default combineReducers({
  transactionError,
  transactionSuccess,
  transactionRequest,
  leadPostingRequest,
  leadPostingSuccess,
  leadPostingError,
  isShowSpinner,
  addOrder,
  orderPostingError,
  orderPostingSuccess,
  orderPostingRequest,
  creditInfo,
  customerInfo,
  preauthPostingError,
  preauthPostingSuccess,
  preauthPostingRequest,
  userFullAgent,
  userAgent,
  variation,
  experimentID,
  trackingID,
  optimizeID,
  query
})
