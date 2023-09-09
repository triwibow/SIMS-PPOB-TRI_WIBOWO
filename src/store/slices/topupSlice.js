import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message:null,
	status:'idle',
};

const topupSlice = createSlice({
	name:"topup",
	initialState:initialState,
	reducers:{
    RESET_STATUS(state){
      state.status = 'idle'
    },
		TOPUP_REQUEST(state){
      state.status = 'loading'
    },
    TOPUP_SUCCESS(state, actions){
      state.status = 'success'
      state.message = actions.payload.message
    },
    TOPUP_ERROR(state, actions){
      state.status = 'error'
      state.message = actions.payload.message
    }
	}
})

export const { 
  RESET_STATUS,
	TOPUP_REQUEST,
  TOPUP_SUCCESS,
  TOPUP_ERROR
} = topupSlice.actions;

export default topupSlice.reducer;