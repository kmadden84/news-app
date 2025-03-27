import React, { useState } from 'react';

const NewsCard = ({ article }) => {
  const [imgError, setImgError] = useState(false);
  
  // Create an inline SVG placeholder instead of using an external file
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle' fill='%23757575'%3ENo Image Available%3C/text%3E%3C/svg%3E`;
  
  // Use article image if available and not already errored, otherwise use placeholder
  const imageUrl = !imgError && article.urlToImage ? article.urlToImage : placeholderImage;
  
  // Format the publication date
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (e) {
      return 'Invalid date';
    }
  };

  const handleCardClick = () => {
    if (article.url) {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageError = (e) => {
    if (!imgError) {
      setImgError(true);
    }
  };

  return (
    <div className="news-card" onClick={handleCardClick}>
      <div className="card-image-container">
        <img 
          src={imageUrl}
          alt={article.title || 'News article'} 
          className="card-image"
          onError={handleImageError}
        />
        <div className="card-image-overlay">
          <div className="card-image-overlay-text">Read More</div>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{article.title || 'Untitled Article'}</h3>
        <p className="card-description">{article.description || 'No description available'}</p>
        <div className="card-meta">
          <span className="card-source">{article?.source?.name || 'Unknown source'}</span>
          <span className="card-date">{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 