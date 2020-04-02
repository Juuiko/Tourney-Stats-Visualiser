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
          <ListGroup.Item><h4><b>Weekly Games (22-29):</b></h4></ListGroup.Item>
          <ListGroup.Item>HongFudge vs Corona Greens : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Niallation vs Clint's Angels : <span style={{color: 'green'}}>2</span> - <span style={{color: 'red'}}>0</span></ListGroup.Item>
          <ListGroup.Item>Arcαne's Angels vs Trihard Cappa : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Shooting Blanks vs Free Wins : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Team S+ Mid vs Yoh : 0 - 0</ListGroup.Item>
          <ListGroup.Item>Dirty Pykey vs Crep : <span style={{color: 'green'}}>2</span> - <span style={{color: 'red'}}>0</span></ListGroup.Item>
          <ListGroup.Item>EsperBoss vs Duck Duck Chad : 0 - 0</ListGroup.Item>
          <ListGroup.Item>PutBaconOnVegan vs bgsCurtis : <span style={{color: 'green'}}>2</span> - <span style={{color: 'red'}}>0</span></ListGroup.Item>
         </ListGroup>
         <PicButton image={Player} imageHover={PlayerHover} text="Player Stats" link="/player-stats"/>
         <PicButton image={Champion} imageHover={ChampionHover} text="Champ Stats" link="/champ-stats" />
         <PicButton image={Team} imageHover={TeamHover} text="Team Stats" link="/team-stats" />
         <iframe title="Quantex Invite Link" src="https://discordapp.com/widget?id=355066343587840010&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
       </div>
      </div>
    )
  }
}

export default HomePage
