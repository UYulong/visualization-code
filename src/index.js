import React from 'react';
import ReactDOM from 'react-dom/client';

// 基础
// import App from './App-base';

// 大屏
// import './screen/lib/lib_flexible'
import App from './App-screen';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
