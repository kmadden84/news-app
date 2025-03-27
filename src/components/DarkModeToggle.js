import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="dark-mode-toggle">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="toggle-slider">
        <span className="toggle-icon sun-icon" style={{display: 'inline-block', fontSize: '18px'}}>☀️</span>
        <span className="toggle-icon moon-icon" style={{display: 'inline-block', fontSize: '18px'}}>🌙</span>
      </span>
    </label>
  );
};

export default DarkModeToggle; 