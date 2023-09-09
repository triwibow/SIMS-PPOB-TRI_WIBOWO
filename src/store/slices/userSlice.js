import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	user:null,
	data: [],
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
			state.status = 'success'
			state.user = actions.payload.user
		},
		FETCH_USER_ERROR(state, actions){
			state.status = 'error'
			state.message = actions.payload.message
		}
	}
})

export const { 
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR
} = userSlice.actions;

export default userSlice.reducer;