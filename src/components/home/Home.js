import React from 'react';
import Header from '../header/Header';
import DateBanner from './DateBanner';
import ButtonsBar from '../buttons-bar/ButtonsBar';

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div class="home-container">
				<Header/>
                <DateBanner/>
                <ButtonsBar/>
			</div>
		);
	}
}
