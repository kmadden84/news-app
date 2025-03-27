import React from 'react';
import NewsCard from './NewsCard';

const FeaturedNews = ({ articles }) => {
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

  return (
    <div className="featured-news">
      <h2 className="section-title">Featured Stories</h2>
      <div className="featured-grid">
        <div className="main-feature" onClick={handleMainFeatureClick}>
          <img 
            src={mainFeature.urlToImage || 'https://via.placeholder.com/800x400?text=No+Image'} 
            alt={mainFeature.title} 
            className="feature-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=No+Image';
            }}
          />
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