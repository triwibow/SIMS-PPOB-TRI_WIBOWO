import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Login from './pages/login/index'
import Register from './container/register/Register';
import Dashboard from './pages/dashboard/index';


function App() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      {/* <Login /> */}
      {/* <Register /> */}
    </main>
  );
}

export default App;
