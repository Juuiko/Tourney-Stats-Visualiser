import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ResponsiveBar } from '@nivo/bar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Data from '../media/playerStats.json'

class Fullscreen extends Component {

  render() {
    return (
      <div className="home">
      <Breadcrumb>
           <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
           <Breadcrumb.Item><Link to="/team-stats">Team Stats</Link></Breadcrumb.Item>
           <Breadcrumb.Item active>Fullscreen</Breadcrumb.Item>
      </Breadcrumb>

        <div className="container-fluid">

        </div>
      </div>
    )
  }
}

export default Fullscreen
