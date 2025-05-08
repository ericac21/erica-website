import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
      <p className="loading-text">Loading ✨</p>
    </div>
  );
}

export default Loader;
