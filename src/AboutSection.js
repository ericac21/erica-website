import React from 'react';
import Navbar from './Navbar';
import './AboutSection.css';
import photoImage from './pfp.JPG';
 
function AboutSection() {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi! I’m Erica Chang, a Computer Science graduate who loves crafting digital experiences
              that are both innovative and user-friendly. My background spans full-stack web development,
              machine learning, and human-centered design, and I’m constantly exploring new ways to blend
              creativity with technology.
            </p>
            <p>
              Whether I’m building responsive frontends or optimizing backend performance, I bring a
              passion for clean code, thoughtful design, and collaborative problem-solving. I believe
              that great software should not only function well, but feel intuitive to use. Outside of
              coding, you’ll often find me tutoring kids, hanging out with my dog, or going on a run!
            </p>
          </div>
          <img className="about-image" src={photoImage} alt="Erica Chang" />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
