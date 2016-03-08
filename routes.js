import { Route, IndexRoute } from 'react-router';
import React from 'react';
import HomePage from "./components/HomePage";
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Footer from './components/Footer';

class App extends React.Component {
	render() {
		return <div>
			{this.props.children}
		</div>
	}
}

let routes = (
	<Route path="/" name='root' component={App}>
		<IndexRoute name='home' component={HomePage}/>
		<Route name='footer' path="/footer" component={Footer} />
	</Route>
);

export default routes;