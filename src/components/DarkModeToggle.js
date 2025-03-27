import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <label className="dark-mode-toggle">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="toggle-slider">
        <span className="toggle-icon sun-icon">☀️</span>
        <span className="toggle-icon moon-icon">🌙</span>
      </span>
    </label>
  );
};

export default DarkModeToggle; 