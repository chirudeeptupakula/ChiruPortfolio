// src/components/About.jsx
import React from 'react';
import '../styles/About.css'; // We'll create this file next

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <h2>About Me</h2>
      <p className="about-text">
        I’m <strong>Chirudeep Tupakula</strong>, a Data Engineer with 2+ years of experience designing high-performance data platforms, GenAI APIs, and cloud-native pipelines. Currently pursuing my Master’s in Computer Science at <strong>Oklahoma State University</strong>, I specialize in building scalable lakehouse architectures and intelligent microservices that deliver real-world impact.
        <br /><br />
        I’ve engineered production-grade ETL systems handling 1M+ daily events using <strong>PySpark, Kafka, Delta Lake</strong> (AWS/Azure), and surfaced analytics via <strong>Redshift, Athena</strong>, and <strong>Snowflake</strong>. My latest work includes a GenAI-powered <strong>FastAPI</strong> service using <strong>OpenAI + FAISS</strong> deployed on AWS Lambda, reducing retrieval latency by 40%.
        <br /><br />
        With a strong foundation in <strong>Python, FastAPI, AWS, and Airflow</strong>, I thrive at the intersection of data engineering and AI — crafting scalable, intelligent solutions with measurable value.
      </p>
    </section>

  );
}

export default About;
