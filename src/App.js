import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './styles/NewsApp.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedNews from './components/FeaturedNews';
import TrendingNews from './components/TrendingNews';
import CategorySelector from './components/CategorySelector';
import SearchBar from './components/SearchBar';
import NewsCard from './components/NewsCard';
import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import { 
  fetchTopHeadlines, 
  fetchTrendingNews, 
  searchNews 
} from './services/newsService';

// Wrapper component to handle category params
function HomePageWithCategory() {
  const { category } = useParams();
  return <HomePage initialCategory={category} />;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Check for saved dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage initialCategory="general" />} />
            <Route path="/categories/:category" element={<HomePageWithCategory />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thanks" element={<ThankYou />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

function HomePage({ initialCategory = "general" }) {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Update active category when initialCategory changes (from router)
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // Fetch featured and trending news on initial load
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch featured news (top headlines)
        const featured = await fetchTopHeadlines();
        setFeaturedArticles(featured);
        
        // Fetch trending news
        const trending = await fetchTrendingNews();
        setTrendingArticles(trending);
        
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load news. Please try again later.');
        setIsLoading(false);
      }
    };
    
    loadInitialData();
  }, []);

  // Fetch news by category when category changes
  useEffect(() => {
    const loadCategoryNews = async () => {
      try {
        setIsLoading(true);
        const articles = await fetchTopHeadlines(activeCategory);
        setCategoryArticles(articles);
        setIsLoading(false);
      } catch (err) {
        setError(`Failed to load ${activeCategory} news. Please try again later.`);
        setIsLoading(false);
      }
    };
    
    loadCategoryNews();
  }, [activeCategory]);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setIsSearching(false); // Reset search state when changing category
  };

  // Handle search
  const handleSearch = async (query) => {
    try {
      setIsLoading(true);
      setIsSearching(true);
      const results = await searchNews(query);
      setSearchResults(results);
      setIsLoading(false);
    } catch (err) {
      setError('Search failed. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="search-container-wrapper">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {error && <div className="error-container"><div className="error-message">{error}</div></div>}
      
      <div className="info-message-container">
        <div className="info-message">
          Click on any article to read the full story in a new tab
        </div>
      </div>
      
      {!isSearching ? (
        <>
          <section id="categories" className="mobile-categories">
            <CategorySelector 
              activeCategory={activeCategory} 
              onSelectCategory={handleCategorySelect} 
            />
          </section>
          
          {activeCategory === 'general' ? (
            <FeaturedNews articles={featuredArticles} />
          ) : (
            <div className="category-news top-category-section">
              <h2 className="section-title">
                {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} News
              </h2>
              
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : (
                <div className="news-grid">
                  {categoryArticles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                  ))}
                </div>
              )}
            </div>
          )}
          
          <section id="categories" className="desktop-categories">
            <CategorySelector 
              activeCategory={activeCategory} 
              onSelectCategory={handleCategorySelect} 
            />
          </section>
          
          {activeCategory === 'general' ? (
            <div className="category-news">
              <h2 className="section-title">Latest News</h2>
              
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : (
                <div className="news-grid">
                  {categoryArticles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <FeaturedNews articles={featuredArticles} />
          )}
          
          <section id="trending">
            <TrendingNews articles={trendingArticles} />
          </section>
        </>
      ) : (
        <section className="search-results">
          <h2 className="section-title">Search Results</h2>
          
          {isLoading ? (
            <div className="loading">Searching...</div>
          ) : searchResults.length > 0 ? (
            <div className="news-grid">
              {searchResults.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          ) : (
            <div>No results found. Try a different search term.</div>
          )}
        </section>
      )}
    </>
  );
}

export default App;
