import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import Navbar from './components/Navbar';
import Technofest from './components/Pages/Technofest';
import Enginuity from './components/Pages/Enginuity';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Homepage />}></Route>
        <Route path="/technofest" element={<Technofest />} />
        <Route path="/enginuity" element={<Enginuity />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
