import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './component/navbar/Navbar';


function App() {
  return (
    <main>
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
