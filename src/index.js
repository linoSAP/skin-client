// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Modifie cette ligne
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Ajoute ceci

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);