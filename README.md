# NewsHub App

A modern news aggregation application built with React.

## NewsAPI and GitHub Pages Solution

This app uses NewsAPI, which restricts browser requests from non-localhost domains in their free tier. To work around this:

1. **For Development:**
   - We use a local proxy configured in package.json
   - Simply run `npm start` to develop locally

2. **For Production:**
   - We use a Netlify serverless function to proxy requests to NewsAPI
   - The app is hosted on GitHub Pages but API requests go through the Netlify function
   - This approach keeps the front-end on GitHub Pages while solving the CORS issue

## Deployment Instructions

### Step 1: Deploy the Netlify Function

1. Create a Netlify account if you don't have one
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Create a `.env` file in the root directory with:
   ```
   NEWS_API_KEY=your_newsapi_key
   ```
4. Deploy the function:
   ```
   netlify login
   netlify deploy --prod
   ```
5. Copy your Netlify site URL and update it in `src/services/newsService.js`

### Step 2: Deploy to GitHub Pages

1. Commit all changes to your GitHub repository
2. Run: `npm run deploy` (if using gh-pages package)
   - Or push to the branch configured for GitHub Pages

## Local Development

In the project directory, you can run:

```
npm install
npm start
```

This runs the app in development mode with the proxy enabled.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- Responsive design with mobile-friendly navigation
- Dark mode support
- Category filtering
- Search functionality
- Featured and trending news sections
- Contact form

## Environment Variables

Create a `.env` file in the root directory with:

```
REACT_APP_NEWS_API_KEY=your_newsapi_key
REACT_APP_FORMSPREE_ID=your_formspree_id
```

For Netlify function, add `NEWS_API_KEY` in Netlify's environment settings.

## Available Scripts

### `npm start`

Runs the app in the development mode with proxy for NewsAPI.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
