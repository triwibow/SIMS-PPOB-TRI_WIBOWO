import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	banner: [],
	status:'idle',
	message:null
};

const bannerSlice = createSlice({
	name:"banner",
	initialState:initialState,
	reducers:{
		RESET_STATUS(state){
			state.status = 'idle'
		},
		FETCH_BANNER_REQUEST(state){
			state.status = 'loading'
		},
		FETCH_BANNER_SUCCESS(state, actions){
			state.status = 'success'
			state.banner = actions.payload.banner
		},
		FETCH_BANNER_ERROR(state, actions){
			state.status = 'error'
			state.banner = []
			state.message = actions.payload.message
		}
	}
})

export const { 
	FETCH_BANNER_REQUEST,
	FETCH_BANNER_SUCCESS,
	FETCH_BANNER_ERROR
} = bannerSlice.actions;

export default bannerSlice.reducer;