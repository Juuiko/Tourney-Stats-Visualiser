import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'

class GraphCard extends Component {

  render() {
    return (
      <Card onClick={this.onClick} tag="a" className="graph-card">
        <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
          {this.props.graph}
        </Card.Body>
      </Card>
    )
  }

  onClick = () => {
    this.state.props.push("fullscreen-graph")
  }
}

export default GraphCard
