import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });

  // Get Formspree ID from environment variable
  const formspreeId = process.env.REACT_APP_FORMSPREE_ID;

  return (
    <div className="about-container">
      <h1 className="section-title">Contact Us</h1>
      
      <div className="about-content">
        <section className="about-section">
          <p>
            We'd love to hear from you! Whether you have feedback, questions, or suggestions, 
            please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </section>
        
        {formStatus.submitted ? (
          <div className="contact-success">
            <h2>Thank you for your message!</h2>
            <p>We have received your inquiry and will respond to you shortly.</p>
            <button 
              className="contact-button"
              onClick={() => setFormStatus({ submitted: false, error: null })}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <div className="contact-form-container">
            {/* Using Formspree for form submission */}
            <form className="contact-form" action={`https://formspree.io/f/${formspreeId}`} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="_subject"
                  placeholder="Subject"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Optional Formspree configurations */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="/thanks" />
              <input type="hidden" name="_captcha" value="false" />
              
              <button type="submit" className="contact-button">Send Message</button>
            </form>

            <div className="form-note">
              <p>* Required fields</p>
            </div>
          </div>
        )}
        
        <section className="about-section contact-alternative">
          <h2>Other Ways to Reach Us</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>Email</h3>
              <p><a href="mailto:info@newshub.example.com">info@newshub.example.com</a></p>
            </div>
            <div className="contact-method">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 