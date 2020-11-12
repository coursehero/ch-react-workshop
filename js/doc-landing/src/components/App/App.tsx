import * as React from 'react'
import { Router } from '@reach/router'

import { DocLanding } from '../DocLanding'

import './App.css'

export const App = () => {
  return (
    <Router>
      <DocLanding path="/:docName" />
    </Router>
  )
}

export default App
