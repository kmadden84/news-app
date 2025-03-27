import React from 'react';

const NewsCard = ({ article }) => {
  // Use a placeholder image if the article doesn't have one
  const imageUrl = article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image';
  
  // Format the publication date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCardClick = () => {
    if (article.url) {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="news-card" onClick={handleCardClick}>
      <div className="card-image-container">
        <img 
          src={imageUrl} 
          alt={article.title} 
          className="card-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
          }}
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{article.title}</h3>
        <p className="card-description">{article.description || 'No description available'}</p>
        <div className="card-meta">
          <span className="card-source">{article.source.name}</span>
          <span className="card-date">{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 