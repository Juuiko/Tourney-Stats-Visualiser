import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavButton extends Component {
	constructor(props) {
		 super()
	}
	render() {
		return (
			<div className="col-md-3">
				<Link to={this.props.link}>
					 <button type="button" className="align-bottom btn btn-outline-primary">{this.props.text}</button>
				</Link>
			</div>
		);
	}
}

export default NavButton;
