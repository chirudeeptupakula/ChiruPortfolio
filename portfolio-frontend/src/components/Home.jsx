// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css';
import headshot from '../assets/headshot.png';

import { Typewriter } from 'react-simple-typewriter';
import StarBackground from './StarBackground';

function Home() {
  return (
    <section id="home" className="home-section" data-aos="fade-up">
      <div className="home-container">
        <div className="home-text">
          <h1 className="animated-heading">
            <span className="dark-text">Chirudeep</span> <span className="orange-text">Tupakula</span>
          </h1>

          <h2 className="animated-subheading delay-1">
            Oklahoma State University 25' <br />
            Master's in Computer Science
          </h2>

          <h2 className="animated-subheading delay2">
            <span>Data</span> <span>Engineer  </span>
          </h2>

          {/* 💬 Add This New Animated Bio */}
          <h3 className="typewriter-text">
            <Typewriter
              words={[
                'Designing scalable data pipelines',
                'Building AI-powered microservices',
                'Engineering GenAI chatbot solutions',
                'Deploying cloud-native ML systems'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h3>
        </div>

        <div className="home-image">
          <img src={headshot} alt="Chirudeep Tupakula" className="headshot-full" />
        </div>
      </div>
    </section>
  );
}

export default Home;
