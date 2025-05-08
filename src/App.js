import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import AboutSection from './AboutSection'; // About page (not on the homepage)
import Loader from './Loader'; // Import the Loader component
import './App.css';

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulate network delay or transition effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // adjust duration to match your aesthetic

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />} {/* Show the loader when loading */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename="/erica-website">
      <AppWrapper />
    </Router>
  );
}

export default App;
