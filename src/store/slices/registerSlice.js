import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message:null,
	status:'idle',
};

const registerSlice = createSlice({
	name:"register",
	initialState:initialState,
	reducers:{
    RESET_STATUS(state){
      state.status = 'idle'
    },
		REGISTER_REQUEST(state){
      state.status = 'loading'
    },
    REGISTER_SUCCESS(state, actions){
      state.status = 'success'
      state.message = actions.payload.message
    },
    REGISTER_ERROR(state, actions){
      state.status = 'error'
      state.message = actions.payload.message
    }
	}
})

export const { 
  RESET_STATUS,
	REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} = registerSlice.actions;

export default registerSlice.reducer;