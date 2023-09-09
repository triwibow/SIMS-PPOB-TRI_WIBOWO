import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice';
import modalReducer from './modalSlice';
import userSlice from './userSlice';
import balanceSlice from './balanceSlice';
import serviceSlice from './serviceSlice';
import topupSlice from './topupSlice';

const rootReducer = combineReducers({
  auth:authSlice,
  register:registerSlice,
  login:loginSlice,
  modal:modalReducer,
  user:userSlice,
  balance:balanceSlice,
  service:serviceSlice,
  topup:topupSlice
});

export default rootReducer;