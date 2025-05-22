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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; // important
import './styles/App.css';
import './styles/Responsive.css';
import ScrollToTop from './components/ScrollToTop';
import Divider from './components/Divider'


function App() {
useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1 second)
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
        <main className="main-content">
        <Home />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <ProjectList />
        <Divider />
        <Experience />
        <Divider />
        <Certifications />
        <Divider />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
