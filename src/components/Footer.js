import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-copyright">
          © {currentYear} NewsHub. Powered by NewsAPI.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 