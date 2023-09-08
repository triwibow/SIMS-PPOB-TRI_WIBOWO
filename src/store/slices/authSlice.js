import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  auth_token:null,
  status:'idle'
};

const authSlice = createSlice({
	name:"auth",
	initialState:initialState,
	reducers:{
    SET_STATUS_IDLE(state){
      state.status = 'idle'
    },
    SET_STATUS_LOADING(state){
      state.status = 'loading'
    },
    SET_AUTH_TOKEN(state, actions){
      state.auth_token = actions.payload.authToken
    },
    CHECK_AUTH_TOKEN(state, actions){
      state.auth_token = actions.payload.authToken
    },
    REMOVE_AUTH_TOKEN(state){
      state.auth_token = null
    }
    
	}
})

export const { 
  SET_STATUS_IDLE,
  SET_STATUS_LOADING,
  SET_AUTH_TOKEN,
  CHECK_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN
} = authSlice.actions;

export default authSlice.reducer;