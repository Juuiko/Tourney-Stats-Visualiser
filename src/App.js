import React from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router-dom'
import history from './backend/history'
import HomePage from './pages/homepage'
import PlayerStats from './pages/player-stats'
import ChampStats from './pages/champ-stats'
import TeamStats from './pages/team-stats'
import PlayerStatsList from './pages/player-stats-list'
import FullscreenPlayer from './pages/fullscreenPlayer'
import FullscreenTeam from './pages/fullscreenTeam'
import FullscreenChamp from './pages/fullscreenChamp'

function App() {
  return (
    <div className="App">
      <Router history={history} basename="/quantex">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/player-stats" component={PlayerStats} />
          <Route exact path="/player-stats/list" component={PlayerStatsList} />
          <Route exact path="/player-stats/fullscreen" component={FullscreenPlayer} />

          <Route exact path="/champ-stats" component={ChampStats} />
          <Route exact path="/champ-stats/fullscreen" component={FullscreenChamp} />
          
          <Route exact path="/team-stats" component={TeamStats} />
          <Route exact path="/team-stats/fullscreen" component={FullscreenTeam} />
        </Switch>
      </Router>
    </div>
  )
}


export default App;
