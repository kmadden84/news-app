import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="about-container">
      <div className="thank-you-container">
        <div className="thank-you-icon">✓</div>
        <h1 className="section-title">Thank You!</h1>
        <div className="about-content">
          <div className="thank-you-message">
            <p>Your message has been successfully sent. We appreciate you contacting NewsHub.</p>
            <p>We will review your message and get back to you as soon as possible.</p>
            
            <div className="thank-you-actions">
              <Link to="/" className="thank-you-button primary-button">
                Return to Homepage
              </Link>
              <Link to="/contact" className="thank-you-button secondary-button">
                Send Another Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 