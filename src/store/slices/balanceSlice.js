import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	balance:null,
	data: [],
	status:'idle',
	message:null
};

const balanceSlice = createSlice({
	name:"balance",
	initialState:initialState,
	reducers:{
		RESET_STATUS(state){
			state.status = 'idle'
		},
		FETCH_BALANCE_REQUEST(state){
			state.status = 'loading'
		},
		FETCH_BALANCE_SUCCESS(state, actions){
			console.log('b :', actions.payload.balance)
			state.status = 'success'
			state.balance = actions.payload.balance
		},
		FETCH_BALANCE_ERROR(state, actions){
			state.status = 'error'
			state.message = actions.payload.message
		},
		SET_BALANCE(state, actions){
			state.balance = actions.payload.balance
		},
	}
})

export const { 
	FETCH_BALANCE_REQUEST,
	FETCH_BALANCE_SUCCESS,
	FETCH_BALANCE_ERROR,

	SET_BALANCE
} = balanceSlice.actions;

export default balanceSlice.reducer;