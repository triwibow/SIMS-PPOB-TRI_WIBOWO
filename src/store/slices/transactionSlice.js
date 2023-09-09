import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message:null,
	status:'idle',
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
    }
	}
})

export const { 
  RESET_STATUS,
	TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_ERROR
} = transactionSlice.actions;

export default transactionSlice.reducer;