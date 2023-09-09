import { API } from "../../config/api";

import {
  RESET_STATUS,
  TOPUP_REQUEST,
  TOPUP_SUCCESS,
  TOPUP_ERROR
} from "../slices/topupSlice"

import {
	SET_BALANCE
} from "../slices/balanceSlice"


export const resetStatus = () => (dispatch) => {
  dispatch(RESET_STATUS())
}

export const topup = (payload)=> async (dispatch, getState) => {
  dispatch(TOPUP_REQUEST())
  try {
    const response = await API.post('/topup', payload)
    const data = await response.data

    console.log('data : ',data)
    dispatch(TOPUP_SUCCESS({message:data?.message}))
		dispatch(SET_BALANCE({balance:data?.data.balance}))
    
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(TOPUP_ERROR({message:errors?.message}))
  }
}