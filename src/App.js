import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gain from './pages/Gain';
import Lose from './pages/Lose';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gain" element={<Gain />} />
        <Route path="/lose" element={<Lose />} />
      </Routes>
    </>
  )
}
export default App;