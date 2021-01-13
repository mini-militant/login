import React from 'react';
import './login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div class="login-card-container">
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>

								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
			</div>
		);
	}
}
