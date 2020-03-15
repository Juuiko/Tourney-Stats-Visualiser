import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup,Tab,Row,Col,Form} from 'react-bootstrap';
import PlayerList from './player-list';
//import PlayerListAccount from './player-list-account';
//import $ from 'jquery';

class Container extends Component {
	constructor(props) {
		 super();
		 this.state = {
			 role: "Top",
			 opgg: "https://media.discordapp.net/attachments/624296386585821215/678726119343521833/OBKing_Twitch_Format.png"
		 };
	}


	handleOptionChange = changeEvent => {
	  		this.setState({
	    			role: changeEvent.target.value
	  		});
	};

	handleOpggLink = (childData) => {
		      this.setState({
				 opgg: childData
			 })
	};

	render() {
		return (
			<div className="col-md-12">
			<Tab.Container defaultActiveKey="#link0">
			  <Row>
			    <Col md={4} sm={12}>
			    <Form>
				   <div className="form-check form-check-inline">
				   <label>
				     <input
					  type="radio"
					  name="react-tips"
					  value="Top"
					  checked={this.state.role === "Top"}
					  onChange={this.handleOptionChange}
					  className="form-check-input"
				     />
				     Top
				   </label>
				 </div>

				 <div className="form-check form-check-inline">
				   <label>
				     <input
					  type="radio"
					  name="react-tips"
					  value="Jungle"
					  checked={this.state.role === "Jungle"}
					          onChange={this.handleOptionChange}
					  className="form-check-input"
				     />
				     Jungle
				   </label>
				 </div>

				 <div className="form-check form-check-inline">
				   <label>
				     <input
					  type="radio"
					  name="react-tips"
					  value="Mid"
					  checked={this.state.role === "Mid"}
					  onChange={this.handleOptionChange}
					  className="form-check-input"
				     />
				     Mid
				   </label>
				 </div>

				<div className="form-check form-check-inline">
				  <label>
				    <input
					 type="radio"
					 name="react-tips"
					 value="ADC"
					 checked={this.state.role === "ADC"}
					 onChange={this.handleOptionChange}
					 className="form-check-input"
				    />
				    ADC
				  </label>
				</div>

				<div className="form-check form-check-inline">
				  <label>
				    <input
					 type="radio"
					 name="react-tips"
					 value="Support"
					 checked={this.state.role === "Support"}
					 onChange={this.handleOptionChange}
					 className="form-check-input"
				    />
				    Support
				  </label>
				</div>
				</Form>
			      <ListGroup>
			        <PlayerList role={this.state.role} dataCallback={this.handleOpggLink} />
				 </ListGroup>
			    </Col>
			    <Col md={8} sm={12}>
					<iframe title="OPGG window" src={this.state.opgg} width="100%" height="800" frameborder="0"></iframe>
			    </Col>
			  </Row>
			</Tab.Container>
			</div>
		);
	}
}

export default Container;
