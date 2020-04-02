import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ResponsiveBar } from '@nivo/bar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class Fullscreen extends Component {

     MyResponsiveBar = ({ data }) => (
         <ResponsiveBar
             data={this.props.location.state.data}
             keys={[ this.props.location.state.graph ]}
             indexBy={this.props.location.state.index}
             margin={{ top: 0, right: 0, bottom: 30, left: 0 }}
             padding={0.3}
             colors={{ scheme: 'nivo' }}
             colorBy="index"
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
      <div className="home">
      <Breadcrumb>
           <Breadcrumb.Item active><Link to="/">Home</Link></Breadcrumb.Item>
           <Breadcrumb.Item active><Link to="/champ-stats">Champ Stats</Link></Breadcrumb.Item>
           <Breadcrumb.Item active>{this.props.location.state.title}</Breadcrumb.Item>
      </Breadcrumb>

        <div className="container-fluid" style={{height: '500px'}}>
        {this.MyResponsiveBar(this.props.location.state.data)}
        </div>
      </div>
    )
  }
}

export default Fullscreen
