import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">📰</span>
          NewsHub
        </Link>
        <div className="header-right">
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/#trending" className="nav-link">Trending</Link>
            <Link to="/#categories" className="nav-link">Categories</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header; 