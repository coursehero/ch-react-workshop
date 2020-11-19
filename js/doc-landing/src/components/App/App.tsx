import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { DocLanding } from '../DocLanding/DocLanding'

import './App.css'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:docName" component={DocLanding} />
      </Switch>
    </Router>
  )
}

export default App
