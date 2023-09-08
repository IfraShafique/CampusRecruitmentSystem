
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import store from './Redux/Store'

const root = document.getElementById('root');
const rootElement = (
  
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>

    </React.StrictMode>
  
);

createRoot(root).render(rootElement); 

reportWebVitals();
