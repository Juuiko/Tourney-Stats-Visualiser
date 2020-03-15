import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import TitleContainer from '../components/title-container'
import NavButton from '../components/nav-button'

class HomePage extends Component {
  render() {
    return (
      <div className="ChampStats">
        <div className="row">
           <TitleContainer
             title="Sorry, come back soon!"
             subtitle="The tournament has to start for stats to work :)"
           ></TitleContainer>
           <NavButton text="Home" link="/"></NavButton>
           <NavButton text="List All" link="/player-stats/list"></NavButton>
        </div>
      </div>
    )
  }
}

export default HomePage
