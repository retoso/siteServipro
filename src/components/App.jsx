
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Solutions from '../pages/Solutions';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/solutions">Soluções</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
