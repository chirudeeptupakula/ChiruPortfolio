// src/components/Certifications.jsx
import React from 'react';
import '../styles/Certifications.css';
import certifications from '../data/certifications';

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.name}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
