import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import home from './App';
import reportWebVitals from './reportWebVitals';
import restricted from './routes/restricted';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={home} />
        <Route path='/restricted' component={restricted} />
        <Redirect to='/restricted' />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
