import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Login from './pages/login/index'
import Register from './container/register/Register';
import Dashboard from './pages/dashboard/index';
import TopUp from './pages/topup/index'


function App() {
  return (
    <main>
      <Navbar />
      {/* <Dashboard /> */}
      <TopUp />
      {/* <Login /> */}
      {/* <Register /> */}
    </main>
  );
}

export default App;
