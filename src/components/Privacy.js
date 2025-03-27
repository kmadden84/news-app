import React from 'react';

const Privacy = () => {
  return (
    <div className="about-container">
      <h1 className="section-title">Privacy Policy</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to NewsHub's Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website. We respect your privacy and are committed to protecting your personal data.
          </p>
        </section>
        
        <section className="about-section">
          <h2>2. Information We Collect</h2>
          <p>
            <strong>Usage Data:</strong> We may collect information on how the Service is accessed and used. This may include 
            information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Service 
            that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other 
            diagnostic data.
          </p>
          <p>
            <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our Service 
            and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
        </section>
        
        <section className="about-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes:</p>
          <ul className="terms-list">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2>4. Data Security</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission over the Internet or method of 
            electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, 
            we cannot guarantee its absolute security.
          </p>
        </section>
        
        <section className="about-section">
          <h2>5. Third-Party Services</h2>
          <p>
            Our Service utilizes NewsAPI and other third-party services to deliver content. These third parties may collect 
            information used to identify you. We recommend reviewing the privacy policies of these third parties to better 
            understand how they handle your data.
          </p>
        </section>
        
        <section className="about-section">
          <h2>6. Your Data Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal data, such as:
          </p>
          <ul className="terms-list">
            <li>The right to access, update or delete the information we have on you</li>
            <li>The right of rectification (to correct data)</li>
            <li>The right to object (to processing of your data)</li>
            <li>The right of restriction (to limit processing of your data)</li>
            <li>The right to data portability (to receive a copy of your data)</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2>7. Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information 
            from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with 
            Personal Data, please contact us.
          </p>
        </section>
        
        <section className="about-section">
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
            on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>
        
        <section className="about-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@newshub.example.com">privacy@newshub.example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 