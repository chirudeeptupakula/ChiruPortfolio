// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can reach me through the following ways:</p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:chirudeep.tupakula@okstate.edu">chirudeep.tupakula@okstate.edu</a></p>
        <p><strong>Phone:</strong> +1 405-293-5131</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chirudeep-tupakula-99bb5a1b1/" target="_blank" rel="noopener noreferrer">View Profile</a></p>
      </div>
    </section>
  );
}

export default Contact;
