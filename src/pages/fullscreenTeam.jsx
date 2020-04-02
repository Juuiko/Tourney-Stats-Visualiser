import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ResponsiveBar } from '@nivo/bar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'

class Fullscreen extends Component {

     MyResponsiveBar = ({ data }) => (
         <ResponsiveBar
             data={this.props.location.state.data}
             keys={[ this.props.location.state.keys ]}
             indexBy={this.props.location.state.index}
             margin={{ top: 10, right: 0, bottom: 30, left: 30 }}
             padding={0.3}
             colors={{ scheme: 'nivo' }}
             colorBy="index"
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
       console.log(this.props.location.state)
    return (
      <div className="home" style={{height: '100vh'}}>
      <Breadcrumb>
           <Breadcrumb.Item active><Link to="/">Home</Link></Breadcrumb.Item>
           <Breadcrumb.Item active><Link to="/team-stats">Team Stats</Link></Breadcrumb.Item>
           <Breadcrumb.Item active>{this.props.location.state.title}</Breadcrumb.Item>
      </Breadcrumb>

        <div className="container-fluid h-75">

            {this.MyResponsiveBar(this.props.location.state.data)}

        </div>
      </div>
    )
  }
}

export default Fullscreen
