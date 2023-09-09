import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice';
import modalReducer from './modalSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  auth:authSlice,
  register:registerSlice,
  login:loginSlice,
  modal:modalReducer,
  user:userSlice
});

export default rootReducer;