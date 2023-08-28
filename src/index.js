
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; 

const root = document.getElementById('root');
const rootElement = (
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  
);

createRoot(root).render(rootElement); 

reportWebVitals();
