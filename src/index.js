
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import store from './Redux/Store'
import { AuthProvider } from './Components/AuthContext';

const root = document.getElementById('root');
const rootElement = (
  
    <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </AuthProvider>

    </React.StrictMode>
  
);

createRoot(root).render(rootElement); 

reportWebVitals();
