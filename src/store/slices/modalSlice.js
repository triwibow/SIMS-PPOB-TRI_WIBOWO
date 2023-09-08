import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModalConfirm: false,
	isModalSuccess:false,
	isModalError:false,
	meta:null
};

const modalSlice = createSlice({
	name:"modal",
	initialState:initialState,
	reducers:{
		MODAL_CONFIRM(state, actions){
			state.isModalConfirm = actions.payload.isModalConfirm
			state.meta = actions.payload.meta 
		},
		MODAL_SUCCESS(state, actions){
			state.isModalSuccess = actions.payload.isModalSuccess
			state.meta = actions.payload.meta
		},
		MODAL_ERROR(state, actions){
			state.isModalError = actions.payload.isModalError
			state.meta = actions.payload.meta
		}
	}
})

export const { 
	MODAL_CONFIRM,
	MODAL_SUCCESS,
	MODAL_ERROR
} = modalSlice.actions;

export default modalSlice.reducer;