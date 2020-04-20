import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class PicButton extends Component {
	constructor(props) {
		 super(props)
		 this.state = {
			 image: "",
			 imageHover: "",
			 src: ""
		 };
	}


	setIsShown = (bool) => {
		if (bool === true) {
			this.setState({src: this.state.imageHover});
		}
          if (bool === false) {
            this.setState({src: this.state.image});
		}
    };

	componentDidMount() {
		this.setState({ image: this.props.image })
		this.setState({ imageHover: this.props.imageHover })
		this.setState({ src: this.props.image});
	}

	render() {
		return (
			<div className="col-md-3 col-sm-6 p-3">
				<Link to={this.props.link}>
					<img
	                     src={this.state.src}
	                     onMouseEnter={() => this.setIsShown(true)}
	                     onMouseLeave={() => this.setIsShown(false)}
	                     alt="link button"
	                     style={{ width: '100%' }} />
				 </Link>
				 <p>{this.props.text}</p>
		     </div>
		);
	}
}

export default PicButton;
