import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from '../components/chart-card'
import Data from '../media/champStats.json'

class ChampStats extends Component {
  render() {
    return (
      <div className="ChampStats">
      <Breadcrumb>
        <Breadcrumb.Item active><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Champ Stats</Breadcrumb.Item>
      </Breadcrumb>

      <div className="container-fluid">
      <CardDeck className="deck">
       <Card
         title="Picked"
         history={this.props.history}
         graph="picked"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
       <Card
         title="Banned"
         history={this.props.history}
         graph="banned"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
       <Card
         title="Damage Share"
         history={this.props.history}
         graph="damageShare"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
       <Card
         title="Gold Share"
         history={this.props.history}
         graph="goldShare"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
       </CardDeck>
       <CardDeck className="deck">
       <Card
         title="KDA"
         history={this.props.history}
         graph="kda"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
       <Card
         title="Kills"
         history={this.props.history}
         graph="kills"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
       <Card
         title="Deaths"
         history={this.props.history}
         graph="deaths"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
       <Card
         title="Assists"
         history={this.props.history}
         graph="assists"
         data={Data}
         index="champName"
         fullscreen="/champ-stats/fullscreen"
       />
      </CardDeck>
      </div>
      </div>
    )
  }
}

export default ChampStats
