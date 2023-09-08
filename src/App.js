import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/index';
import Navbar from './component/navbar/Navbar';
import Login from './pages/login/index'


function App() {
  return (
    <main>
      {/* <Navbar />
      <Home /> */}
      <Login />
    </main>
  );
}

export default App;
