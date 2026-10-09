import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#marketplace">Marketplace</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#for-provider">For Provider</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;