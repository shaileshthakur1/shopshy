import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/shop'); 
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>LuxeHaven Collections </h1>
        <p>Beyond just a fashion. </p>
      </header>
      <div className="landing-content">
        <button onClick={handleExploreClick} className="explore-button">
          Explore Collections
        </button>
      </div>
      <footer className="landing-footer">
        <p>Copyright LuxeHaven &copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};
