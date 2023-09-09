import { API } from "../../config/api";

import { 
  FETCH_BALANCE_REQUEST,
  FETCH_BALANCE_SUCCESS,
  FETCH_BALANCE_ERROR 
} from "../slices/balanceSlice";


export const fetchData = () => async (dispatch, getState) => {
  dispatch(FETCH_BALANCE_REQUEST());
  try {
    const response = await API.get('/balance');
    const data = await response.data

    dispatch(FETCH_BALANCE_SUCCESS({balance:data?.data?.balance}));
    return response;
  }catch(err){
    const error = err
    const errors = error.response?.data
    dispatch(FETCH_BALANCE_ERROR({message:errors?.message}));
  }
}