// About.js (the About section on the homepage)
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-sec">
      <h2>About Me</h2>
      <p>👋 I'm Erica, a CS grad passionate about AI, full-stack development, and innovation. I’ve built AI solutions, optimized ML models, and led end-to-end app development. I'm excited by work that merges creativity with impact. Beyond code, I value collaboration, accessibility, and lifelong learning.</p>
      <Link to="/about" className="learn-more">Learn More</Link>
    </div>
  );
}

export default About;
