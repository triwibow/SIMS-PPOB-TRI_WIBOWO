import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/index';
import Navbar from './component/navbar/Navbar';
import Login from './pages/login/index'
import Register from './container/register/Register';


function App() {
  return (
    <main>
      {/* <Navbar />
      <Home /> */}
      {/* <Login /> */}
      <Register />
    </main>
  );
}

export default App;
