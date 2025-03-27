import React from 'react';

const Terms = () => {
  return (
    <div className="about-container">
      <h1 className="section-title">Terms of Service</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using NewsHub, you accept and agree to be bound by the terms and provisions of this agreement. 
            If you do not agree to these terms, please do not use our service.
          </p>
        </section>
        
        <section className="about-section">
          <h2>2. Description of Service</h2>
          <p>
            NewsHub provides users with access to aggregated news content from various sources through its platform. 
            The content displayed is sourced from third-party providers via NewsAPI, and we do not claim ownership of this content.
          </p>
        </section>
        
        <section className="about-section">
          <h2>3. User Conduct</h2>
          <p>
            You agree to use NewsHub only for lawful purposes and in a way that does not infringe upon the rights of others. 
            Prohibited activities include but are not limited to:
          </p>
          <ul className="terms-list">
            <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers</li>
            <li>Using the service for any illegal purpose, or in violation of any local, state, national, or international law</li>
            <li>Copying, distributing, or disclosing any part of the service in any medium</li>
            <li>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2>4. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are owned by NewsHub and are protected by international copyright, 
            trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>
        
        <section className="about-section">
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            NewsHub is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the 
            operation or availability of the service. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free.
          </p>
        </section>
        
        <section className="about-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall NewsHub, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
            or other intangible losses.
          </p>
        </section>
        
        <section className="about-section">
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. It is your responsibility to check the Terms periodically for changes. 
            Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.
          </p>
        </section>
        
        <section className="about-section">
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:legal@newshub.example.com">legal@newshub.example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms; 