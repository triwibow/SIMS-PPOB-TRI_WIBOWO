import { combineReducers } from '@reduxjs/toolkit';

import authSlice from './authSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice';

const rootReducer = combineReducers({
  auth:authSlice,
  register:registerSlice,
  login:loginSlice,
});

export default rootReducer;