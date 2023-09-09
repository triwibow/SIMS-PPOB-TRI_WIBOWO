import { combineReducers } from '@reduxjs/toolkit';

import registerSlice from './registerSlice';
import loginSlice from './loginSlice';
import modalReducer from './modalSlice';

const rootReducer = combineReducers({
  register:registerSlice,
  login:loginSlice,
  modal:modalReducer
});

export default rootReducer;