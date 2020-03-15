import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';
import Data from '../media/player-list.json';

class PlayerList extends Component {

	sendData = (opgg) => {
		this.props.dataCallback(opgg);
	};

	render() {
		return (
		<div>
            {Data.map((players, index) => {
			  if (players.role === this.props.role){
			  return <ListGroup.Item
			  		action href={'#'+players.name}
					onClick={this.sendData.bind(this, players.opgg)}
					>{players.name}
					</ListGroup.Item>
			  } return null;
		   })}
         </div>
		);
	}
}

export default PlayerList;
