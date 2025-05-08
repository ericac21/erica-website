import React from 'react';
import './Socials.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Socials() {
  return (
    <div className="socials">
      <ul>
        <li><a href="https://www.linkedin.com/in/erica-chang-2021/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
        <li><a href="mailto:ericachang1234@gmail.com"><FaEnvelope /></a></li>
      </ul>
    </div>
  );
}

export default Socials;
