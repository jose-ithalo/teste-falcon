import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './page/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
