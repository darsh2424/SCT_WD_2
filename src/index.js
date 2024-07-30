import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import './components/main.css';
import ToDo from './components/ToDo';
import TicTacToe from './components/TicTacToe';
const Index = () => {
  const [showToDo, setShowToDo] = useState(false);
  const [showTicTacToe,setTicTacToe]=useState(false);
  const toggleToDo = () => {
    setShowToDo(!showToDo);
    document.querySelector('.home-nav').classList.toggle('blur');
  };

  const toggleGame = () => {
    setTicTacToe(!showTicTacToe);
    document.querySelector('.home-nav').classList.toggle('blur');
    document.querySelector('#game-btn').classList.toggle('d-none');
    
  };
  return (
    <React.StrictMode>
      <Router>
        <Navbar toggleToDo={toggleToDo} toggleGame={toggleGame} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home toggleGame={toggleGame} />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Add other routes here */}
          </Routes>
          {showToDo && <ToDo toggleToDo={toggleToDo} />}
          {showTicTacToe && <TicTacToe toggleGame={toggleGame}/>}
        </div>
      </Router>
    </React.StrictMode>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

