import React from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router-dom'
import history from './backend/history'
import HomePage from './pages/homepage'
import PlayerStats from './pages/player-stats'
import ChampStats from './pages/champ-stats'
import TeamStats from './pages/team-stats'
import PlayerStatsList from './pages/player-stats-list'

function App() {
  return (
    <div className="App">
      <Router history={history} basename="/quantex">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/player-stats" component={PlayerStats} />
          <Route exact path="/champ-stats" component={ChampStats} />
          <Route exact path="/team-stats" component={TeamStats} />
          <Route exact path="/player-stats/list" component={PlayerStatsList} />
        </Switch>
      </Router>
    </div>
  )
}


export default App;
