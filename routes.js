import { Route, IndexRoute } from 'react-router';
import React from 'react';
import HomePage from "./components/HomePage";

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
	</Route>
);

export default routes;