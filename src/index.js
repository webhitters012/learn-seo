import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log Web Vitals to console and send to analytics endpoint
reportWebVitals((metric) => {
  console.log(metric);
  // TODO: Add analytics endpoint integration
});
