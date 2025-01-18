import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Journey from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiBot from './components/AiBot';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section>
      <section id="journey">
        <Journey />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <AiBot />
    </div>
  );
}

export default App;