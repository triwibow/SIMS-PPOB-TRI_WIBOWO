import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	user:null,
	data: [],
	status:'idle'
};

const userSlice = createSlice({
	name:"user",
	initialState:initialState,
	reducers:{
		FETCH_USER_REQUEST(state){
			state.loading = true
		},
		FETCH_USER_SUCCESS(state, actions){
			state.loading = false
			state.user = actions.payload.user
		},
		FETCH_USER_ERROR(state){
			state.loading = false
		}
	}
})

export const { 
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR
} = userSlice.actions;

export default userSlice.reducer;