// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-content">
        <h2>Contact Me</h2>

        <p className="email-text">Prefer email? Direct mail me:</p>

        <div className="email-link">
          <a href="mailto:chirudeeptupakula@gmail.com" target="_blank" rel="noopener noreferrer">
            chirudeeptupakula@gmail.com
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/chirudeeptupakula" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/chirudeep-tupakula-99bb5a1b1/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
