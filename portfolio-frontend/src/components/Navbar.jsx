// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css';
import portfolioLogo from '../assets/portfolioLogo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={portfolioLogo} alt="Logo" className="navbar-logo" />
        <span className="navbar-brand">Chirudeep Tupakula</span>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Normal Navbar Links */}
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleMenuToggle}>Home</a>
        <a href="#about" onClick={handleMenuToggle}>About</a>
        <a href="#projects" onClick={handleMenuToggle}>Projects</a>
        <a href="#skills" onClick={handleMenuToggle}>Skills</a>
        <a href="#experience" onClick={handleMenuToggle}>Experience</a>
        <a href="#certifications" onClick={handleMenuToggle}>Certifications</a>
        <a href="#contact" onClick={handleMenuToggle}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
