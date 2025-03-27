import React from 'react';
import NewsCard from './NewsCard';

const TrendingNews = ({ articles }) => {
  // If no articles are available yet
  if (!articles || articles.length === 0) {
    return (
      <div className="trending-news">
        <h2 className="section-title">Trending Now</h2>
        <div className="loading">
          <div>Loading trending stories...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="trending-news">
      <h2 className="section-title">Trending Now</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNews; 