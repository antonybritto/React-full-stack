import React from 'react';
import { Link } from 'react-router';
import styles from './Homepage.css';
import Header from '../Header';
import Footer from '../Footer';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/events.js';

let Homepage = React.createClass({
	getDefaultProps() {

	},
	componentDidMount() {
		this.props.dispatch(fetchEvents());
    },
	render() {
		let list = [];
		if(this.props.events.loading) {
			list.push(<li key={1}>Loading...</li>);
		}
		this.props.events && this.props.events.events.forEach((item, index) => {
			list.push(<li key={index} className="Grid-cell">
					Name : {item.name}<br/>
					Venue : {item.venue}<br/>
					CreatedBy : {item.createdBy}<br/>
			</li>);
		});
		return <div className={styles['homePage']}>
		            <Header />
		            <ul className="Grid">
		            	{list}
					</ul>
					<Link to="footer">View Footer</Link>
			   </div>;
	}
});

function mapStateToProps(state) {
	return {
		events: state.events
	};
}

export default connect(mapStateToProps)(Homepage);