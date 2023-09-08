import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import Dashboard from '../pages/dashboard/index'
import TopUp from '../pages/topup/index'
import Transaction from '../pages/transaction/index'
import Account from '../pages/account/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
	{
    path: "/topup",
    element: <TopUp />,
  },
	{
    path: "/transaction",
    element: <Transaction />,
  },
	{
    path: "/account",
    element: <Account />,
  },
]);

const Route = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default Route