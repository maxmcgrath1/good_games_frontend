import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/games"  element={<Games URL={URL} />} />
        <Route path="/about"  element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
