import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class PicButton extends Component {
	constructor(props) {
		 super(props)
		 this.state = {
			 image: this.props.image
		 };
	}


	setIsShown = (bool) => {
		if (bool === true) {
			this.setState({image: this.props.image2});
		}
          if (bool === false) {
               this.setState({image: this.props.image});
		}
    };

	render() {
		return (

			<div className="col-md-3 col-sm-6 p-3">
				<Link to="/player-stats">
					<img
	                     src={this.state.image}
	                     onMouseEnter={() => this.setIsShown(true)}
	                     onMouseLeave={() => this.setIsShown(false)}
	                     alt="link button"
	                     style={{ width: '100%' }} />
				 </Link>
		     </div>
		);
	}
}

export default PicButton;
