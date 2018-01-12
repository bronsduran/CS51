import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(<Router basename="/CS51" history={browserHistory} routes={routes} />, document.querySelector('.root'));
