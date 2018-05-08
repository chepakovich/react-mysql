import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Employees from './components/Employees'
import OneEmployee from './components/OneEmployee'
import Performance from './components/Performance'

import Reviews from './components/Reviews'
import Feedback from './components/Feedback'
import Home from './components/Home'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/employees' component={Employees} />
      <Route path='/employee/:userid' component={OneEmployee} />
      <Route path='/performance/:userid' component={Performance} />
      <Route path='/reviews/:userid?' component={Reviews} />
      <Route path='/feedback/:userid' component={Feedback} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
