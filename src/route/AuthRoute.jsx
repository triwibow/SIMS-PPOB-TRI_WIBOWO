import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkAuthToken } from "../store/actions/authAction";

const AuthRoute = ({ children }) => {
	const { auth_token } = useSelector(state => state.auth)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkAuthToken())
	}, [])
	
  if(auth_token){
    return <Navigate to={'/'} />
  }

	return children;
};

export default AuthRoute