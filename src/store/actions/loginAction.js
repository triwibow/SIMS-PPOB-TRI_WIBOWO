import { API } from "../../config/api";
// import { setAuthToken } from "./authAction";

import {
  RESET_STATUS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../slices/loginSlice"


export const resetStatus = () => (dispatch) => {
  dispatch(RESET_STATUS())
}

export const login = (payload) => async (dispatch, getState) => {
  dispatch(LOGIN_REQUEST())
  try {
    const response = await API.post('/login', payload)
    const data = await response.data
    
    // dispatch(setAuthToken(data.token))
    dispatch(LOGIN_SUCCESS({message:data?.message}))
    
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(LOGIN_ERROR({message:errors?.message}))
  }
}