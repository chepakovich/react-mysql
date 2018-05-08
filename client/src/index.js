import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Employees from './components/Employees'
import OneEmployee from './components/OneEmployee'
import DeleteEmployee from './components/DeleteEmployee'
import Performance from './components/Performance'
import Home from './components/Home'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/employees' component={Employees} />
      <Route path='/employee/:userid' component={OneEmployee} />
      <Route path='/delemployee/:userid' component={DeleteEmployee} />
      <Route path='/performance/:userid' component={Performance} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
