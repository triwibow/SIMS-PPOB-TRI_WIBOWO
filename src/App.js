import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Login from './pages/login/index'
import Register from './container/register/Register';
import Dashboard from './pages/dashboard/index';
import TopUp from './pages/topup/index'
import Pay from './pages/pay/index'
import Transaction from './pages/transaction/index'
import Account from './pages/account/index'

import Route from './route/Route';


function App() {
  return (
    <main>
      <Route />
    </main>
  );
}

export default App;
