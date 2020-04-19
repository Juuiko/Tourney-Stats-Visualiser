import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ListGroup} from 'react-bootstrap';

import TitleContainer from '../components/title-container'
import PicButton from '../components/picture-button'
import Player from '../media/player.png';
import PlayerHover from '../media/playerHover.png';
import Champion from '../media/champ.png';
import ChampionHover from '../media/champHover.png';
import Team from '../media/team.png';
import TeamHover from '../media/teamHover.png';

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="container-fluid">
           <TitleContainer
             title="Welcome to the Quantex Captain's Draft Stats Homepage!"
             subtitle="A web app to visualise player, team & champion stats along the course of the tournament."
           ></TitleContainer>
        <div className="row">
        <ListGroup variant="flush" className="col-md-3 p-3">
          <ListGroup.Item><h4><b>Weekly Games (30-05):</b></h4></ListGroup.Item>
          <ListGroup.Item>HongFudge vs Clint's Angels : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Corona Greens vs Niallation : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Arcαne's Angels vs Free Wins : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Trihard Cappa vs Shooting Blanks : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team S+ Mid vs Crep : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Yoh vs Dirty Pykey : 0 - 0</ListGroup.Item>
          <ListGroup.Item>EsperBoss vs Resolve : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Duck Duck Chad vs PutBaconOnVegan : 0 - 0</ListGroup.Item>
         </ListGroup>
         <PicButton image={Player} imageHover={PlayerHover} text="Player Stats" link="/player-stats"/>
         <PicButton image={Champion} imageHover={ChampionHover} text="Champ Stats" link="/champ-stats" />
         <PicButton image={Team} imageHover={TeamHover} text="Team Stats" link="/team-stats" />
       </div>
      </div>
    )
  }
}

export default HomePage
