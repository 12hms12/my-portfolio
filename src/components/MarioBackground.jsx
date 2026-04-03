import React from 'react';
import './MarioBackground.css';

const MarioBackground = ({ isDarkMode }) => {
  return (
    <div className={`mario-bg ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="stars">
        <div className="star" style={{ top: '10%', left: '20%' }}></div>
        <div className="star" style={{ top: '25%', left: '80%' }}></div>
        <div className="star" style={{ top: '15%', left: '50%' }}></div>
        <div className="star" style={{ top: '40%', left: '10%' }}></div>
        <div className="star" style={{ top: '5%', left: '90%' }}></div>
        <div className="star" style={{ top: '30%', left: '60%' }}></div>
        <div className="star" style={{ top: '48%', left: '7%' }}></div>
        <div className="star" style={{ top: '2%', left: '35%' }}></div>
        <div className="star" style={{ top: '57%', left: '23%' }}></div>
        <div className="star" style={{ top: '50%', left: '53%' }}></div>
        <div className="star" style={{ top: '52%', left: '58%' }}></div>
        <div className="star" style={{ top: '79%', left: '89%' }}></div>
      </div>

      <div className="clouds-container">
        <div className="cloud cloud-1" style={{ top: '15%', left: '10%' }}></div>
        <div className="cloud cloud-2" style={{ top: '25%', left: '45%' }}></div>
        <div className="cloud cloud-3" style={{ top: '10%', left: '75%' }}></div>
        <div className="cloud cloud-1" style={{ top: '35%', left: '85%' }}></div>
        <div className="cloud cloud-2" style={{ top: '38%', left: '30%' }}></div>
        <div className="cloud cloud-1" style={{ top: '90%', left: '15%' }}></div>
        <div className="cloud cloud-1" style={{ top: '72%', left: '65%' }}></div>

      </div>

    </div>
  );
};

export default MarioBackground;
