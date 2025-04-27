// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css';
import headshot from '../assets/headshot.png';

function Home() {
  return (
    <section id="home" className="home-section" data-aos="fade-up">
      <div className="home-container">

        <div className="home-text">
          <h1 className="animated-heading">
            <span>Chirudeep</span> <span>Tupakula</span>
          </h1>
          <h2 className="animated-subheading">
            <span>Oklahoma</span> <span>State</span> <span>University</span> <span>25'</span> <br />
            <span>Master's</span> <span>in</span> <span>Computer</span> <span>Science</span>
          </h2>
          <h2 className="animated-subheading">
            <span>Data</span> <span>Engineer</span>
          </h2>
        </div>

        <div className="home-image">
          <img src={headshot} alt="Chirudeep Tupakula" className="headshot-full" />
        </div>

      </div>
    </section>
  );
}

export default Home;
