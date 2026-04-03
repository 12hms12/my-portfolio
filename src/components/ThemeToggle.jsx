import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button 
      className="pixel-btn theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? 'LIGHT' : 'DARK'}
    </button>
  );
};

export default ThemeToggle;
