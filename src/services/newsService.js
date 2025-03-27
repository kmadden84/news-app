// Use API key from environment variables - only needed for local development
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

// Determine if we're in development or production
const isDev = process.env.NODE_ENV === 'development';

// Use the appropriate API endpoint based on environment
// In development, we use the proxy defined in package.json
// In production, we use the Netlify function
const BASE_URL = isDev 
  ? '' // Empty string uses proxy in package.json
  : 'https://news-app-proxy.netlify.app/api'; // Your actual Netlify site URL

export const fetchTopHeadlines = async (category = 'general', country = 'us') => {
  try {
    let url;

    if (isDev) {
      // Development - use local proxy
      url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    } else {
      // Production - use Netlify function
      url = `${BASE_URL}?endpoint=top-headlines&country=${country}&category=${category}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('Error from News API:', data.message);
      return [];
    }
    
    return data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};

export const fetchTrendingNews = async () => {
  try {
    let url;

    if (isDev) {
      // Development - use local proxy
      url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
    } else {
      // Production - use Netlify function
      url = `${BASE_URL}?endpoint=top-headlines&country=us`;
    }

    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('Error from News API:', data.message);
      return [];
    }
    
    return data.articles;
  } catch (error) {
    console.error('Error fetching trending news:', error);
    return [];
  }
};

export const searchNews = async (query) => {
  try {
    let url;

    if (isDev) {
      // Development - use local proxy
      url = `${BASE_URL}/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`;
    } else {
      // Production - use Netlify function
      url = `${BASE_URL}?endpoint=everything&q=${query}&sortBy=popularity`;
    }

    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('Error from News API:', data.message);
      return [];
    }
    
    return data.articles;
  } catch (error) {
    console.error('Error searching news:', error);
    return [];
  }
};

export const getCategories = () => {
  return [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ];
}; 