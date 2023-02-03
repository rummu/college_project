import logo from "./logo.svg";
import "./App.css";
import './css/Navbar.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
