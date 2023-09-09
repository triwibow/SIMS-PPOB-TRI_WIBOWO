import {
	createBrowserRouter,
	RouterProvider,
  Navigate
} from "react-router-dom";

import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from '../pages/dashboard/index'
import TopUp from '../pages/topup/index'
import Transaction from '../pages/transaction/index'
import Pay from '../pages/pay/index'
import Account from '../pages/account/index'

import Login from '../pages/login/index'
import Register from '../pages/register/index'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthRoute>
      <Login />
    </AuthRoute>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>,
  },
	{
    path: "/topup",
    element: <ProtectedRoute>
              <TopUp />
            </ProtectedRoute>,
  },
  {
    path: "/pay/:code",
    element: <ProtectedRoute>
              <Pay />
            </ProtectedRoute>,
  },
	{
    path: "/transaction",
    element: <ProtectedRoute>
              <Transaction />
            </ProtectedRoute>,
  },
	{
    path: "/account",
    element: <ProtectedRoute>
              <Account />
            </ProtectedRoute>,
  },
  
]);

const Route = () => {
  
	return (
		<RouterProvider router={router} />
	)
}

export default Route