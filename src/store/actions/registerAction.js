import { API } from "../../config/api";

import {
  RESET_STATUS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../slices/registerSlice"


export const resetStatus = () => (dispatch) => {
  dispatch(RESET_STATUS())
}

export const register = (payload)=> async (dispatch, getState) => {
  dispatch(REGISTER_REQUEST())
  try {
    const response = await API.post('/registration', payload)
    const data = await response.data
    dispatch(REGISTER_SUCCESS({message:data?.message}))
    
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(REGISTER_ERROR({message:errors?.message}))
  }
}