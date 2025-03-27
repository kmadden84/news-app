import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="section-title">About NewsHub</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At NewsHub, we're committed to delivering the latest and most accurate news stories from around the world. 
            Our mission is to keep you informed with reliable, timely, and relevant news coverage across various categories.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Values</h2>
          <p>
            <strong>Accuracy:</strong> We prioritize factual reporting and verify information before publishing.
          </p>
          <p>
            <strong>Timeliness:</strong> We understand the importance of delivering news when it matters.
          </p>
          <p>
            <strong>Diversity:</strong> We cover a wide range of topics to provide a comprehensive view of world events.
          </p>
          <p>
            <strong>Accessibility:</strong> We believe news should be accessible to everyone, anywhere, anytime.
          </p>
        </section>
        
        <section className="about-section">
          <h2>How We Work</h2>
          <p>
            NewsHub aggregates news from various trusted sources using the NewsAPI. 
            Our platform presents the latest headlines, trending topics, and category-specific news 
            in a clean, user-friendly interface. We provide direct links to original articles, 
            ensuring you can always access the full story from the source.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or suggestions? We'd love to hear from you! 
            Please contact us at <a href="mailto:info@newshub.example.com">info@newshub.example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 