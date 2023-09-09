import { API } from "../../config/api";

import { 
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_ERROR 
} from "../slices/serviceSlice";


export const fetchData = () => async (dispatch, getState) => {
  dispatch(FETCH_SERVICE_REQUEST());
  try {
    const response = await API.get('/services');
    const data = await response.data

    dispatch(FETCH_SERVICE_SUCCESS({services:data.data}));
    return response;
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(FETCH_SERVICE_ERROR({message:errors?.message}));
  }
}