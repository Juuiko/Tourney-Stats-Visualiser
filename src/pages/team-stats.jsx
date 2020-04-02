import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import TitleContainer from '../components/title-container'
import Card from '../components/chart-card'
import Bar from '../components/bar-chart'
import NavButton from '../components/nav-button'
import CardDeck from 'react-bootstrap/CardDeck'

class TeamStats extends Component {

  render() {
    return (
      <div className="home">
      <NavButton text="Home" link="/"></NavButton>

        <div className="row">
           <TitleContainer
             title="Team Statistics"
             subtitle=""
           ></TitleContainer>
        </div>

        <div className="deck-container">
        <CardDeck className="deck">
          <Card
            title="KDA"
            history={this.props.history}
            graph={
              <Bar
                keys="kda"
                fullGraph={false}
              />
            }
          />
          <Card
            title="Kills"
            history={this.props.history}
            graph={
              <Bar
                keys="kills"
                fullGraph={false}
              />
            }
          />
          <Card
            title="Deaths"
            history={this.props.history}
            graph={
              <Bar
                keys="deaths"
                fullGraph={false}
              />
            }
          />
          <Card
            title="Assists"
            history={this.props.history}
            graph={
              <Bar
                keys="assists"
                fullGraph={false}
              />
            }
          />
          </CardDeck>
          <CardDeck className="deck">
          <Card
            title="CS/M"
            history={this.props.history}
            graph={
              <Bar
                keys="csm"
                fullGraph={false}
              />
            }
          />
          <Card
            title="Wins"
            history={this.props.history}
            graph={
              <Bar
                keys="wins"
                fullGraph={false}
              />
            }
          />
          <Card
            title="Gold"
            history={this.props.history}
            graph={
              <Bar
                keys="gold"
                fullGraph={false}
              />
            }
          />
          <Card
            title="Average Length"
            history={this.props.history}
            graph={
              <Bar
                keys="averageLength"
                fullGraph={false}
              />
            }
          />
        </CardDeck>
        </div>
      </div>
    )
  }
}

export default TeamStats
