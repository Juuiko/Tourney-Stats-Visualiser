import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import TitleContainer from '../components/title-container'
import NavButton from '../components/nav-button'
//import Data from '../media/data.json'

class HomePage extends Component {
  render() {
    return (
      <div className="ChampStats">
      <NavButton text="Home" link="/"></NavButton>
        <div className="row">
           <TitleContainer
             title="Sorry, come back soon!"
             subtitle="The tournament has to start for stats to work :)"
           ></TitleContainer>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default HomePage
