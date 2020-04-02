import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class ChampStats extends Component {
  render() {
    return (
      <div className="ChampStats">
      <Breadcrumb>
        <Breadcrumb.Item active><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Champ Stats</Breadcrumb.Item>
      </Breadcrumb>
      </div>
    )
  }
}

export default ChampStats
