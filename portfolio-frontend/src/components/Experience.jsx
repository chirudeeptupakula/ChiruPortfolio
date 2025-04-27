// src/components/Experience.jsx
import React from 'react';
import '../styles/Experience.css';
import experiences from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="experience-section" data-aos="fade-left">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-date">{exp.date}</p>
              <ul>
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
