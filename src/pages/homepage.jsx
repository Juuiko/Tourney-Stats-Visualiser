import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';

import TitleContainer from '../components/title-container'
import Player from '../media/player.png';
import Champion from '../media/champ.png';
import Team from '../media/team.png';

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="container col-md-12">
           <TitleContainer
             title="Welcome to the Quantex Captain's Draft Stats Homepage!"
             subtitle="A web app to visualise player, team & champion stats along the course of the tournament."
           ></TitleContainer>
        <div className="row">
        <ListGroup variant="flush" className="col-md-3 col-sm-6 p-3">
          <ListGroup.Item><h4><b>Weekly Games (16-22):</b></h4></ListGroup.Item>
          <ListGroup.Item>Team 1 vs Team 2 : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team 3 vs Team 4 : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team 5 vs Team 6 : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team 7 vs Team 8 : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team 9 vs Team 10 : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team 11 vs Team 12 : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team 13 vs Team 14 : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team 15 vs Team 16 : 0 - 0</ListGroup.Item>
         </ListGroup>
         <div className="col-md-3 col-sm-6 p-3"><Link to="/player-stats"><img src={Player} alt="player" style={{ width: '100%' }} /></Link><div><b>Player Stats</b></div></div>
         <div className="col-md-3 col-sm-6 p-3"><Link to="/champ-stats"><img src={Champion} alt="champion" style={{ width: '100%' }} /></Link><div><b>Champion Stats</b></div></div>
         <div className="col-md-3 col-sm-6 p-3"><Link to="/team-stats"><img src={Team} alt="team" style={{ width: '100%' }} /></Link><div><b>Team Stats</b></div></div>
         </div>
      </div>
    )
  }
}

export default HomePage
