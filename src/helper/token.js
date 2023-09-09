import { Cookies } from "react-cookie";

const cookies = new Cookies()

export const setAuthToken = (token) => {
	cookies.set('auth_token', token, { path: '/' });
};

export const getAuthToken = () => cookies.get('auth_token');

export const removeAuthToken = () => {
  cookies.remove('auth_token', { path: '/' });
};