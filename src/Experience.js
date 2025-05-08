// Experience.js (on home)

import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

function Experience() {
    return (
        <div className="experience-sec">
            <h2>Experience</h2>
            <a href="/EricaChang_Resume.pdf" download ClassName="download-button">
                Download Resume
            </a>
        </div>
    );
}

export default Experience;