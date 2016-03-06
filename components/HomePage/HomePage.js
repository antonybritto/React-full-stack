import React from 'react';
import styles from './Homepage.css';
import Header from '../Header';
import Footer from '../Footer';

export default React.createClass({
	render() {
		return <div className={styles['homePage']}>
		            <Header />
					<Footer />
			   </div>;
	}
});