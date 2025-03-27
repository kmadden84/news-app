import React, { useState } from 'react';
import NewsCard from './NewsCard';

const FeaturedNews = ({ articles }) => {
  const [mainImageError, setMainImageError] = useState(false);
  
  // Create an inline SVG placeholder
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23757575'%3ENo Image Available%3C/text%3E%3C/svg%3E`;
  
  // If no articles are available yet
  if (!articles || articles.length === 0) {
    return (
      <div className="featured-news">
        <h2 className="section-title">Featured Stories</h2>
        <div className="loading">
          <div>Loading featured stories...</div>
        </div>
      </div>
    );
  }

  // Select the first article as the main feature
  const mainFeature = articles[0];
  // Use the next 2 articles for secondary features
  const secondaryFeatures = articles.slice(1, 3);

  const handleMainFeatureClick = () => {
    if (mainFeature.url) {
      window.open(mainFeature.url, '_blank', 'noopener,noreferrer');
    }
  };
  
  const handleMainImageError = () => {
    if (!mainImageError) {
      setMainImageError(true);
    }
  };
  
  // Use article image if available and not already errored, otherwise use placeholder
  const mainImageUrl = !mainImageError && mainFeature.urlToImage ? mainFeature.urlToImage : placeholderImage;

  return (
    <div className="featured-news">
      <h2 className="section-title">Featured Stories</h2>
      <div className="featured-grid">
        <div className="main-feature" onClick={handleMainFeatureClick}>
          <img 
            src={mainImageUrl}
            alt={mainFeature.title} 
            className="feature-image"
            onError={handleMainImageError}
          />
          <div className="main-feature-overlay">
            <div className="card-image-overlay-text">Read More</div>
          </div>
          <div className="feature-content">
            <h2 className="feature-title">{mainFeature.title}</h2>
            <p>{mainFeature.description}</p>
            <p className="feature-source">
              {mainFeature.source.name} • {new Date(mainFeature.publishedAt).toLocaleDateString()}
              {mainFeature.url && (
                <span className="feature-link">
                  {' '}• from {new URL(mainFeature.url).hostname.replace('www.', '')}
                </span>
              )}
            </p>
          </div>
        </div>
        
        {secondaryFeatures.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;