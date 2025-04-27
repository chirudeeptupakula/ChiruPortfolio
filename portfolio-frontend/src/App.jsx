// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import ProjectList from './components/ProjectList';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import About from './components/About';
import './styles/App.css';
import './styles/Responsive.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <ProjectList />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
