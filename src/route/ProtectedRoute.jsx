import { Outlet, Navigate } from "react-router-dom";
import { getAuthToken } from "../helper/token";
import { setAuthToken } from "../store/actions/authAction";
import { useDispatch } from "react-redux";

const useAuth = () => {
	const dispatch = useDispatch()
	const token = getAuthToken()

	if(token){
		dispatch(setAuthToken(token))
	}

	return token
}

const ProtectedRoute = () => {
	const isAuth = useAuth()

	return isAuth ?<Outlet />:<Navigate to={'/login'} />
}

export default ProtectedRoute