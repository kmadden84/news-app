const fetch = require('node-fetch');

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers
    };
  }

  try {
    // Get endpoint and parameters from query string
    const params = event.queryStringParameters || {};
    const endpoint = params.endpoint || 'top-headlines';
    
    // Remove endpoint from params to forward the rest to NewsAPI
    const { endpoint: _, ...apiParams } = params;
    
    // Build query string
    const queryParams = new URLSearchParams({
      ...apiParams,
      apiKey: API_KEY
    }).toString();
    
    // Make request to NewsAPI
    const response = await fetch(`${BASE_URL}/${endpoint}?${queryParams}`);
    const data = await response.json();
    
    // Return the response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch data from NewsAPI' })
    };
  }
}; 