import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Header({ darkMode, toggleDarkMode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
    if (isMobile) setMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    // Force a full navigation to home that will reset all state
    if (location.pathname === '/') {
      // If already on the home page, reload it to clear search results
      window.location.href = '#/';
      window.location.reload();
    } else {
      navigate('/');
    }
    if (isMobile) setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="#/" className="logo" onClick={handleHomeClick}>NewsHub</a>
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
              <a href="#/" className="nav-link" onClick={handleHomeClick}>Home</a>
              <button onClick={() => handleCategoryClick('business')} className="nav-link-button">Business</button>
              <button onClick={() => handleCategoryClick('technology')} className="nav-link-button">Technology</button>
              <button onClick={() => handleCategoryClick('health')} className="nav-link-button">Health</button>
              <button onClick={() => handleCategoryClick('science')} className="nav-link-button">Science</button>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        )}

        {isMobile && (
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <nav className="mobile-nav-links">
              <a href="#/" className="nav-link" onClick={handleHomeClick}>Home</a>
              <button onClick={() => handleCategoryClick('business')} className="nav-link-button">Business</button>
              <button onClick={() => handleCategoryClick('technology')} className="nav-link-button">Technology</button>
              <button onClick={() => handleCategoryClick('health')} className="nav-link-button">Health</button>
              <button onClick={() => handleCategoryClick('science')} className="nav-link-button">Science</button>
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="mobile-dark-mode">
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header; 