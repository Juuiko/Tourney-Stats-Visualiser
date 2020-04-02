import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import TitleContainer from '../components/title-container'
import Card from '../components/chart-card'
import NavButton from '../components/nav-button'
import Data from '../media/teamStats.json'

class TeamStats extends Component {

  render() {
    return (
      <div className="home" style={{height: '100vh'}}>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Team Stats</Breadcrumb.Item>
      </Breadcrumb>

        <div className="container-fluid">
             <CardDeck className="deck">
                    <Card
                      title="KDA"
                      history={this.props.history}
                      graph="kda"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
                    <Card
                      title="Kills"
                      history={this.props.history}
                      graph="kills"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
                    <Card
                      title="Deaths"
                      history={this.props.history}
                      graph="deaths"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
                    <Card
                      title="Assists"
                      history={this.props.history}
                      graph="assists"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
               </CardDeck>
               <CardDeck className="deck">
                    <Card
                      title="CS/M"
                      history={this.props.history}
                      graph="csm"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
                    <Card
                      title="Wins"
                      history={this.props.history}
                      graph="wins"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
                    <Card
                      title="Gold"
                      history={this.props.history}
                      graph="gold"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
                    <Card
                      title="Average Length"
                      history={this.props.history}
                      graph="averageLength"
                      data={Data}
                      index="teamName"
                      fullscreen="/team-stats/fullscreen"
                    />
             </CardDeck>
        </div>
      </div>
    )
  }
}

export default TeamStats
