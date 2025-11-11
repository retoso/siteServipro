import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-logo">Logo</Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/solutions">Soluções</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contato</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;