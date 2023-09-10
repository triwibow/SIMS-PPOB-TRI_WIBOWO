import { API } from "../../config/api";

import { 
  RESET_STATUS,

  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR ,

  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,

  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCESS,
  UPDATE_IMAGE_ERROR
} from "../slices/userSlice";

export const resetStatus = () => (dispatch) => {
  dispatch(RESET_STATUS())
}

export const fetchData = () => async (dispatch, getState) => {
  dispatch(FETCH_USER_REQUEST());
  try {
    const response = await API.get('/profile');
    const data = await response.data

    dispatch(FETCH_USER_SUCCESS({user:data.data}));
    return response;
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(FETCH_USER_ERROR({message:errors?.message}));
  }
}

export const editProfile = (payload) => async (dispatch, getState) => {
  dispatch(EDIT_USER_REQUEST());
  try {
    const response = await API.put('/profile/update', payload);
    const data = await response.data
    
    dispatch(EDIT_USER_SUCCESS({user:data.data, message:data.message}));
    return response;
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(EDIT_USER_ERROR({message:errors?.message}));
  }
}

export const updateProfileImage = (payload) => async (dispatch, getState) => {
  dispatch(UPDATE_IMAGE_REQUEST())
  try {
    const response = await API.put('/profile/image', payload);
    const data = await response.data

    dispatch(UPDATE_IMAGE_SUCCESS({user:data.data, message:data.message}));
  } catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(UPDATE_IMAGE_ERROR({message:errors?.message}));
  }
}