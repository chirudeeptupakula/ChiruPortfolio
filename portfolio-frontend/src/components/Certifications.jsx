// src/components/Certifications.jsx
import React from 'react';
import '../styles/Certifications.css';
import awsLogo from '../assets/aws-certified-cloud-practitioner-logo.png';
import tableauLogo from '../assets/tableau-desktop-specialist-logo.png';

function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: awsLogo
    },
    {
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      image: tableauLogo
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-content">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <img src={cert.image} alt={cert.name} className="certification-logo" />
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
