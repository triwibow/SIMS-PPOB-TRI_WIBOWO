import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Dashboard from '../pages/dashboard/index'
import TopUp from '../pages/topup/index'
import Transaction from '../pages/transaction/index'
import Pay from '../pages/pay/index'
import Account from '../pages/account/index'

import Login from '../pages/login/index'
import Register from '../pages/register/index'


const RouteApp = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/topup" element={<TopUp />} />
          <Route exact path="/pay/:code" element={<Pay />} />
          <Route exact path="/transaction" element={<Transaction />} />
          <Route exact path="/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RouteApp