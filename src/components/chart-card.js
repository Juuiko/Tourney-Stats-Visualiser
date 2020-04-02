import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import { ResponsiveBar } from '@nivo/bar'

class GraphCard extends Component {

     MyResponsiveBar = ({ data }) => (
         <ResponsiveBar
             data={this.props.data}
             keys={[ this.props.graph ]}
             indexBy={this.props.index}
             margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
             padding={0.3}
             colors={{ scheme: 'nivo' }}
             defs={[
                 {
                     id: 'dots',
                     type: 'patternDots',
                     background: 'inherit',
                     color: '#38bcb2',
                     size: 4,
                     padding: 1,
                     stagger: true
                 },
                 {
                     id: 'lines',
                     type: 'patternLines',
                     background: 'inherit',
                     color: '#eed312',
                     rotation: -45,
                     lineWidth: 6,
                     spacing: 10
                 }
             ]}
             borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
             axisTop={null}
             axisRight={null}
             axisBottom={null}
             axisLeft={null}
             enableLabel={false}
             animate={true}
             motionStiffness={90}
             motionDamping={15}
         />
     )

  render() {
    return (
      <Card onClick={this.onClick} tag="a" className="graph-card" style={{ height: '450px' }}>
        <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
          {this.MyResponsiveBar(this.props.data)}
        </Card.Body>
      </Card>
    )
  }

  onClick = () => {
    this.state.props.push("fullscreen-graph")
  }
}

export default GraphCard
