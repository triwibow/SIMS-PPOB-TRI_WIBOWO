import { setAuthToken as setAuthTokenAPI } from "../../config/api";
import { setAuthToken as setAuthTokenCookie, getAuthToken, removeAuthToken as removeAuthTokenCookie } from "../../helper/token";

import {
  SET_STATUS_IDLE,
  SET_STATUS_LOADING,
  SET_AUTH_TOKEN,
  CHECK_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN
} from "../slices/authSlice"

export const setAuthToken = (payload) => async (dispatch, getState) => {
  setAuthTokenCookie(payload)
  setAuthTokenAPI(payload)
  dispatch(SET_AUTH_TOKEN({authToken:payload}))
}

export const checkAuthToken = () => async (dispatch) => {
  dispatch(SET_STATUS_LOADING())
  const token = getAuthToken()

  setAuthTokenAPI(token)
  dispatch(CHECK_AUTH_TOKEN({authToken:token}))
  dispatch(SET_STATUS_IDLE())
}

export const removeAuthToken = ()=> async (dispatch) => {
  removeAuthTokenCookie()
  setAuthTokenAPI(null)
  dispatch(REMOVE_AUTH_TOKEN())
}

export const logout = () => async (dispatch) => {
  dispatch(removeAuthToken())
}