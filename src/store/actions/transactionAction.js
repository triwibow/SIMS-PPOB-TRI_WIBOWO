import { API } from "../../config/api";

import { substractBalance } from "./balanceAction";

import {
  RESET_LIMIT,
  RESET_STATUS,
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_ERROR,

  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_ERROR
} from "../slices/transactionSlice"

export const resetStatus = () => (dispatch) => {
  dispatch(RESET_STATUS())
}

export const resetLimit = () => (dispatch) => {
  dispatch(RESET_LIMIT())
}

export const transaction = (payload)=> async (dispatch, getState) => {
  dispatch(TRANSACTION_REQUEST())
  try {
    const response = await API.post('/transaction', payload)
    const data = await response.data
    
    dispatch(TRANSACTION_SUCCESS({message:data?.message}))
	  dispatch(substractBalance(data?.data?.total_amount || 0))
    
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(TRANSACTION_ERROR({message:errors?.message}))
  }
}

export const fetchTransactions = (params) => async (dispatch, getState) => {
  dispatch(FETCH_TRANSACTION_REQUEST())
  try {
    const response = await API.get('transaction/history', {params:params})
    const data = await response.data
    dispatch(FETCH_TRANSACTION_SUCCESS({
      transactions:data.data.records,
      limit:params.limit
    }))
  } catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(FETCH_TRANSACTION_ERROR({message:errors?.message}))
  }
}