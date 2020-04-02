import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import TitleContainer from '../components/title-container'
import PlayerList from '../components/player-list-container'

class HomePage extends Component {
  render() {
    return (
     <div>
          <Breadcrumb>
            <Breadcrumb.Item active><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item active><Link to="/player-stats">Player Stats</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>OP.GGs</Breadcrumb.Item>
          </Breadcrumb>
           <div className="container-fluid">
             <div className="row">
                <TitleContainer
                  title="Here's all the players' OPGGs!"
                  subtitle=""
                ></TitleContainer>
                <PlayerList></PlayerList>
             </div>
           </div>
      </div>
    )
  }
}

export default HomePage
