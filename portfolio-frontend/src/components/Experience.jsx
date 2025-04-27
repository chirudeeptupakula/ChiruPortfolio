// src/components/Experience.jsx
import React from 'react';
import '../styles/Experience.css';
import experiences from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <h4 className="company">{exp.company}</h4>
              <p className="experience-date">{exp.date}</p>
              <ul>
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
