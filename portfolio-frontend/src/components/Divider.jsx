// src/components/Divider.jsx
import React from 'react';
import '../styles/Divider.css';
import portfolioLogo from '../assets/portfolioLogo.png'; // Your logo

function Divider() {
  return (
    <div className="divider-container">
      <div className="divider-line"></div>
      <div className="divider-logo">
        <img src={portfolioLogo} alt="Logo" />
      </div>
      <div className="divider-line"></div>
    </div>
  );
}

export default Divider;
