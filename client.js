import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './routes.js';
import clientStore from './stores/stores.js';

import './styles.css';

render(
	<Provider store={clientStore}>
		<Router history={browserHistory}>{Routes}</Router>
	</Provider>, document.getElementById('myApp')
);