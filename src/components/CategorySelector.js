import React from 'react';
import { getCategories } from '../services/newsService';

const CategorySelector = ({ activeCategory, onSelectCategory }) => {
  const categories = getCategories();
  
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector; 