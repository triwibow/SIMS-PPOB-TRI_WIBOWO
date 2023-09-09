import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	services: [],
	status:'idle',
	message:null
};

const serviceSlice = createSlice({
	name:"services",
	initialState:initialState,
	reducers:{
		RESET_STATUS(state){
			state.status = 'idle'
		},
		FETCH_SERVICE_REQUEST(state){
			state.status = 'loading'
		},
		FETCH_SERVICE_SUCCESS(state, actions){
			state.status = 'success'
			state.services = actions.payload.services
		},
		FETCH_SERVICE_ERROR(state, actions){
			state.status = 'error'
			state.services = []
			state.message = actions.payload.message
		}
	}
})

export const { 
	FETCH_SERVICE_REQUEST,
	FETCH_SERVICE_SUCCESS,
	FETCH_SERVICE_ERROR
} = serviceSlice.actions;

export default serviceSlice.reducer;