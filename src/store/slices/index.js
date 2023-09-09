import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice';
import modalReducer from './modalSlice';

const rootReducer = combineReducers({
  auth:authSlice,
  register:registerSlice,
  login:loginSlice,
  modal:modalReducer
});

export default rootReducer;