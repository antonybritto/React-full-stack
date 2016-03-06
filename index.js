import { Router, hashHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes.js';
import './styles.css';

render((
  <Router history={hashHistory}>{routes}</Router>
), document.getElementById('myApp'))