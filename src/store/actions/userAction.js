import { API } from "../../config/api";

import { 
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR 
} from "../slices/userSlice";


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