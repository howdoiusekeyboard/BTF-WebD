import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Homepage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
