import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import TitleContainer from '../components/title-container'
import PlayerList from '../components/player-list-container'

class HomePage extends Component {
  render() {
    return (
      <div className="container col-md-12">
        <div className="row">
           <TitleContainer
             title="Here's all the players' OPGGs!"
             subtitle="happy drafting :)"
           ></TitleContainer>
           <PlayerList></PlayerList>
        </div>
      </div>
    )
  }
}

export default HomePage
