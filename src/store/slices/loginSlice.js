import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  message:null,
	status:'idle',
};

const loginSlice = createSlice({
	name:"login",
	initialState:initialState,
	reducers:{
    RESET_STATUS(state){
      state.status = 'idle'
    },
		LOGIN_REQUEST(state){
      state.status = 'loading'
    },
    LOGIN_SUCCESS(state, actions){
      state.status = 'success'
      state.message = actions.payload.message
    },
    LOGIN_ERROR(state, actions){
      state.status = 'error'
      state.message = actions.payload.message
    }
	}
})

export const { 
  RESET_STATUS,
	LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} = loginSlice.actions;

export default loginSlice.reducer;