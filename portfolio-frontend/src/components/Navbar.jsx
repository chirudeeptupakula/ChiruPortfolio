// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css';
import portfolioLogo from '../assets/portfolioLogo.png'; // your logo or image

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // close sidebar after clicking link on mobile
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      {/* Logo + Name */}
      <div className="navbar-logo">
        <img src={portfolioLogo} alt="Logo" />
        <span className="navbar-name">Chirudeep Tupakula</span>
      </div>

      {/* Mobile menu icon */}
      <div className="menu-icon" onClick={handleMenuToggle}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation links */}
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#experience" onClick={handleLinkClick}>Experience</a>
        <a href="#certifications" onClick={handleLinkClick}>Certifications</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
