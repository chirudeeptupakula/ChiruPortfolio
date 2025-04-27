// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
import portfolioLogo from '../assets/portfolioLogo.png'; // ✅ Import your logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={portfolioLogo} alt="Logo" className="navbar-logo" />
        <span className="navbar-brand">Chirudeep Tupakula</span> {/* Updated name */}
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
