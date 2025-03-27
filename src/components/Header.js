import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 767;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo">NewsHub</Link>
          {isMobile && (
            <button 
              className={`hamburger-menu ${menuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          )}
        </div>

        {!isMobile && (
          <div className="header-right">
            <nav className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/categories/business" className="nav-link">Business</Link>
              <Link to="/categories/technology" className="nav-link">Technology</Link>
              <Link to="/categories/health" className="nav-link">Health</Link>
              <Link to="/categories/science" className="nav-link">Science</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
            <DarkModeToggle />
          </div>
        )}

        {isMobile && (
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <nav className="mobile-nav-links">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/categories/business" className="nav-link" onClick={() => setMenuOpen(false)}>Business</Link>
              <Link to="/categories/technology" className="nav-link" onClick={() => setMenuOpen(false)}>Technology</Link>
              <Link to="/categories/health" className="nav-link" onClick={() => setMenuOpen(false)}>Health</Link>
              <Link to="/categories/science" className="nav-link" onClick={() => setMenuOpen(false)}>Science</Link>
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="mobile-dark-mode">
              <DarkModeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header; 