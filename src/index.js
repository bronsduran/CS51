import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

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
