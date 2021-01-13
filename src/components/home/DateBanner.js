import React from 'react';
import './date-banner.css'

export default class DateBanner extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div class="date-banner-container">				
                <p><span>Wednesday 17/07/21 </span></p>
			</div>
		);
	}
}
