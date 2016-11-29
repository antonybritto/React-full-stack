// @flow
import React from 'react';
import styles from './Header.css';
let no: number = 'test';

export default React.createClass({
	render() {
		return <div className={styles['header']}>
					Header
			   </div>;
	}
});