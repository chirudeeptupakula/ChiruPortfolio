// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <h2>About Me</h2>

      <p className="about-text">
        I’m <strong>Chirudeep Tupakula</strong>—a Python&nbsp;Full-Stack&nbsp;GenAI&nbsp;Developer &amp; Data&nbsp;Engineer with 2 + years leading
        scalable GenAI APIs and big-data solutions in <strong>AWS</strong> and <strong>Azure</strong>.
        I build enterprise-grade microservices with <strong>Flask / FastAPI, OpenAI, RAG,</strong> and&nbsp;<strong>Llama</strong>,
        then surface insights through modern <strong>React.js</strong> front-ends.
      </p>

      <p className="about-text">
        My toolkit spans <strong>Spark, PySpark, Spark ML, TensorFlow</strong> for large-scale data engineering and ML pipelines,
        plus <strong>Databricks</strong> for seamless end-to-end workflows. Recent work includes a GenAI-powered FastAPI service
        on <strong>AWS&nbsp;Lambda</strong> that cut retrieval latency 40 %, and lakehouse architectures ingesting 1 M + events/day with
        <strong> Kafka, Delta Lake, Redshift,</strong> and <strong>Athena</strong>.
      </p>

      <p className="about-text">
        I’m comfortable containerising with <strong>Docker</strong>, automating releases via <strong>CI/CD</strong>,
        and collaborating in agile, cross-functional teams. Currently pursuing an M.S. in Computer Science at
        <strong> Oklahoma State University</strong>, I thrive at the intersection of data engineering and AI—delivering
        robust, customer-focused GenAI products that drive measurable value.
      </p>
    </section>
  );
}

export default About;
