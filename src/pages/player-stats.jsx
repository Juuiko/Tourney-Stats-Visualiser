import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import TitleContainer from '../components/title-container'
import Card from '../components/chart-card'
import NavButton from '../components/nav-button'
import Data from '../media/playerStats.json'

class PlayerStats extends Component {

  render() {
    return (
      <div className="home">
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Player Stats</Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/player-stats/list">OP.GGs</Link></Breadcrumb.Item>
      </Breadcrumb>

        <div className="container-fluid">
        <CardDeck className="deck">
          <Card
           title="KDA"
           history={this.props.history}
           graph="kda"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="Kills"
           history={this.props.history}
           graph="kills"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="Deaths"
           history={this.props.history}
           graph="deaths"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="Assists"
           history={this.props.history}
           graph="assists"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          </CardDeck>
          <CardDeck className="deck">
          <Card
           title="CS/M"
           history={this.props.history}
           graph="csm"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="DP/M"
           history={this.props.history}
           graph="dpm"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="VS/M"
           history={this.props.history}
           graph="vsm"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="Kill Part"
           history={this.props.history}
           graph="killPart"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="Multi Kills"
           history={this.props.history}
           graph="killPart"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
          <Card
           title="Gold Share"
           history={this.props.history}
           graph="goldShare"
           data={Data}
           index="playerName"
           fullscreen="/player-stats/fullscreen"
          />
        </CardDeck>
        </div>
      </div>
    )
  }
}

export default PlayerStats
