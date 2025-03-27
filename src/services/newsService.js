const API_KEY = 'aac18cf3acf04bf69cb2ecf5cd878583';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (category = 'general', country = 'us') => {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};

export const fetchTrendingNews = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching trending news:', error);
    return [];
  }
};

export const searchNews = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
    );
    const data = await response.json();
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