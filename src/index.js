import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

// Use this once you're ready to generate the production build
// ReactDOM.render(
//   <BrowserRouter basename="/class/cs51">
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
