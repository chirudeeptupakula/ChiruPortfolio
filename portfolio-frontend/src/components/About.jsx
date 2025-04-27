// src/components/About.jsx
import React from 'react';
import '../styles/About.css'; // We'll create this file next

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-right">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am Chirudeep Tupakula, a passionate Data Engineer specializing in building scalable data pipelines, cloud architectures, and AI-powered systems.
          Currently pursuing my Master's in Computer Science at Oklahoma State University, graduating in 2025.
        </p>
        <p>
          I love working with Python, PySpark, AWS, FastAPI, and leveraging GenAI technologies to solve real-world problems.
          With a strong academic and practical background, I aim to bring innovative, efficient, and intelligent solutions to the data-driven world.
        </p>
      </div>
    </section>
  );
}

export default About;
