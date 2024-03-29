import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from "./Header.js";
import Body from "./Body.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col bg-custom-beige h-full">
      <Header />
      <Body />
    </div>
  </React.StrictMode>
);