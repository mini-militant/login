import React from 'react';
import Button from 'react-bootstrap/Button';

export default class ButtonsBar extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div class="buttons-bar-container">		
            
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>10</Button>
            <Button>11</Button>
            <Button>12</Button>
			</div>
		);
	}
}
