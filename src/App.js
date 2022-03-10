import './App.css';
import './tictactoe.css'
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Tictactoe from './components/Tictactoe';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GameList from './components/GameList';

function App() {
  const URL = "https://capstone-good-games.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/games"  element={<Games URL={URL} />} />
        <Route path="/games/tictactoe" element={<Tictactoe URL={URL} />} />
        <Route path="/about"  element={<About URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
