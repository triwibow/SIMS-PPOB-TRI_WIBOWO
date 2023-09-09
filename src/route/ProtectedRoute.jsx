import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkAuthToken } from "../store/actions/authAction";

const ProtectedRoute = ({ children }) => {
	const { auth_token } = useSelector(state => state.auth)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkAuthToken())
	}, [])

  if(!auth_token){
    return <Navigate to={'/login'} />
  }

	return children;
};

export default ProtectedRoute