import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div class="header-container">
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">
						{/* <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" /> */}
                        App Name
					</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}
