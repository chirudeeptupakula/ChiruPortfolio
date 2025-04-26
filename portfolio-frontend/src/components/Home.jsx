// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Chirudeep Tupakula</h1>
        <h3>Data Engineer | GenAI API Developer</h3>
        <p>Graduate Student | Python | PySpark | AWS | FastAPI | Databricks | LLMs | RAG</p>
        <a href="#projects" className="btn-primary">View My Projects</a>
      </div>
    </section>
  );
}

export default Home;
