import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ResponsiveBar } from '@nivo/bar'
import Data from '../media/teamStats.json'

class BarChart extends Component {

     MyResponsiveBar = ({ data }) => (
         <ResponsiveBar
             data={Data}
             keys={[ this.props.keys ]}
             indexBy="teamName"
             margin={{ top: 50, right: 0, bottom: 50, left: 50 }}
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
             axisBottom={{
                 tickSize: 5,
                 tickPadding: 5,
                 tickRotation: 0,
             }}
             axisLeft={{
                 tickSize: 5,
                 tickPadding: 5,
                 tickRotation: 0,
             }}
             enableLabel={false}
             animate={true}
             motionStiffness={90}
             motionDamping={15}
         />
     )

  render() {
    return (
      <div className="container">
        <div className="row" style={{ height: '700px' }}>
             {this.MyResponsiveBar(Data)}
        </div>
      </div>
    )
  }
}

export default BarChart
