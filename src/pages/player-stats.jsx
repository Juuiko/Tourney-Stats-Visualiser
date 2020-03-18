import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import TitleContainer from '../components/title-container'
import NavButton from '../components/nav-button'
import { ResponsiveBar } from '@nivo/bar'
import Data from '../media/data2.json'

class HomePage extends Component {

     MyResponsiveBar = ({ data }) => (
         <ResponsiveBar
             data={Data}
             keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
             indexBy="country"
             margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
             fill={[
                 {
                     match: {
                         id: 'fries'
                     },
                     id: 'dots'
                 },
                 {
                     match: {
                         id: 'sandwich'
                     },
                     id: 'lines'
                 }
             ]}
             borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
             axisTop={null}
             axisRight={null}
             axisBottom={{
                 tickSize: 5,
                 tickPadding: 5,
                 tickRotation: 0,
                 legend: 'country',
                 legendPosition: 'middle',
                 legendOffset: 32
             }}
             axisLeft={{
                 tickSize: 5,
                 tickPadding: 5,
                 tickRotation: 0,
                 legend: 'food',
                 legendPosition: 'middle',
                 legendOffset: -40
             }}
             labelSkipWidth={12}
             labelSkipHeight={12}
             labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
             legends={[
                 {
                     dataFrom: 'keys',
                     anchor: 'bottom-right',
                     direction: 'column',
                     justify: false,
                     translateX: 120,
                     translateY: 0,
                     itemsSpacing: 2,
                     itemWidth: 100,
                     itemHeight: 20,
                     itemDirection: 'left-to-right',
                     itemOpacity: 0.85,
                     symbolSize: 20,
                     effects: [
                         {
                             on: 'hover',
                             style: {
                                 itemOpacity: 1
                             }
                         }
                     ]
                 }
             ]}
             animate={true}
             motionStiffness={90}
             motionDamping={15}
         />
     )

  render() {
    return (
      <div className="ChampStats">
        <div className="row">
           <NavButton text="Home" link="/"></NavButton>
           <NavButton text="List All" link="/player-stats/list"></NavButton>
           <TitleContainer
             title="Player Stats!"
             subtitle="Misc player stats"
           ></TitleContainer>
        </div>
        <div className="row" style={{ height: '700px' }}>
             {this.MyResponsiveBar(Data)}
        </div>
      </div>
    )
  }
}

export default HomePage
