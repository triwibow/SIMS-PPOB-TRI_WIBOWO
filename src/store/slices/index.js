import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice';
import modalReducer from './modalSlice';
import userSlice from './userSlice';
import balanceSlice from './balanceSlice';

const rootReducer = combineReducers({
  auth:authSlice,
  register:registerSlice,
  login:loginSlice,
  modal:modalReducer,
  user:userSlice,
  balance:balanceSlice
});

export default rootReducer;