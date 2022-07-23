import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import home from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={home} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
