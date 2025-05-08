// Home.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Email from './Email';
import About from './About';
import Experience from './Experience';
import './Home.css';

function Home() {
  const text = "Hello, my name is Erica Chang.";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Socials />
      <Email />
      <div className="App" id="home">
        <h1 className="typewriter">
          {displayedText}
          <span className="cursor"></span>
        </h1>
        <h2 className="subtitle">Learning by building.</h2>
        <p className="description">
          I'm a computer science graduate with a strong interest in software development, especially in 
          creating thoughtful, user-focused applications. I'm always looking for opportunities to grow my skills 
          and contribute to meaningful projects.
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>

      <section id="about" className="section">
        <About />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      <section id="contact" className="section">Contact Me</section>
    </>
  );
}

export default Home;
