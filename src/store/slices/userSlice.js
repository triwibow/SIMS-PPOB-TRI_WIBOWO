import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	user:null,
	status:'idle',
	message:null
};

const userSlice = createSlice({
	name:"user",
	initialState:initialState,
	reducers:{
		RESET_STATUS(state){
			state.status = 'idle'
		},
		FETCH_USER_REQUEST(state){
			state.status = 'loading'
		},
		FETCH_USER_SUCCESS(state, actions){
			state.status = 'idle'
			state.user = actions.payload.user
		},
		FETCH_USER_ERROR(state, actions){
			state.status = 'error'
			state.user = null
			state.message = actions.payload.message
		},

		EDIT_USER_REQUEST(state){
			state.status = 'loading'
		},
		EDIT_USER_SUCCESS(state, actions){
			state.status = 'success'
			state.user = actions.payload.user
			state.message = actions.payload.message
		},
		EDIT_USER_ERROR(state, actions){
			state.status = 'error'
			state.user = null
			state.message = actions.payload.message
		}
	}
})

export const { 
	RESET_STATUS,

	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR,

	EDIT_USER_REQUEST,
	EDIT_USER_SUCCESS,
	EDIT_USER_ERROR
} = userSlice.actions;

export default userSlice.reducer;