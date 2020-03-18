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
      <div className="container col-md-12">
           <TitleContainer
             title="Welcome to the Quantex Captain's Draft Stats Homepage!"
             subtitle="A web app to visualise player, team & champion stats along the course of the tournament."
           ></TitleContainer>
        <div className="row">
        <ListGroup variant="flush" className="col-md-3 col-sm-6 p-3">
          <ListGroup.Item><h4><b>Weekly Games (16-22):</b></h4></ListGroup.Item>
          <ListGroup.Item>HongFudge vs Corona Greens : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Niallation vs Clinto : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Arcαne's Angels vs Trihard Cappa : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Shooting Blanks vs Free Wins : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team S+ Mid vs Yoh : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Dirty Pykey vs Crep : 0 - 0</ListGroup.Item>
          <ListGroup.Item>EsperBoss vs Duck Duck Chad : 0 - 0</ListGroup.Item>
          <ListGroup.Item>PutBaconOnVegan vs bgsCurtis : 0 - 0</ListGroup.Item>
         </ListGroup>
         <PicButton image={Player} imageHover={PlayerHover} link="/player-stats"/>
         <PicButton image={Champion} imageHover={ChampionHover} link="/champ-stats" />
         <PicButton image={Team} imageHover={TeamHover} link="/team-stats" />
       </div>
      </div>
    )
  }
}

export default HomePage
