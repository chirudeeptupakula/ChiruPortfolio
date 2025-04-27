// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';
import skills from '../data/skills'; // assuming you have skills.js

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
