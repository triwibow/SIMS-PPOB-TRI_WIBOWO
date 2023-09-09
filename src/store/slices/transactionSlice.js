import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message:null,
	status:'idle',
  transactions:[],
  offset:0,
  limit:5
};

const transactionSlice = createSlice({
	name:"transaction",
	initialState:initialState,
	reducers:{
    RESET_STATUS(state){
      state.status = 'idle'
    },
		TRANSACTION_REQUEST(state){
      state.status = 'loading'
    },
    TRANSACTION_SUCCESS(state, actions){
      state.status = 'success'
      state.message = actions.payload.message
    },
    TRANSACTION_ERROR(state, actions){
      state.status = 'error'
      state.message = actions.payload.message
    },

    FETCH_TRANSACTION_REQUEST(state){
      state.status = 'loading'
    },
    FETCH_TRANSACTION_SUCCESS(state, actions){
      state.status = 'success'
      state.transactions = actions.payload.transactions
      state.limit = actions.payload.limit
    },
    FETCH_TRANSACTION_ERROR(state){
      state.status = 'error'
      state.transactions = []
    }
	}
})

export const { 
  RESET_STATUS,
	TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_ERROR,

  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_ERROR
} = transactionSlice.actions;

export default transactionSlice.reducer;