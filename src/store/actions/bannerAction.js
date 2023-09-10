import { API } from "../../config/api";

import { 
  FETCH_BANNER_REQUEST,
  FETCH_BANNER_SUCCESS,
  FETCH_BANNER_ERROR 
} from "../slices/bannerSlice";


export const fetchData = () => async (dispatch, getState) => {
  dispatch(FETCH_BANNER_REQUEST());
  try {
    const response = await API.get('/banner');
    const data = await response.data
    dispatch(FETCH_BANNER_SUCCESS({banner:data.data}));
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(FETCH_BANNER_ERROR({message:errors?.message}));
  }
}