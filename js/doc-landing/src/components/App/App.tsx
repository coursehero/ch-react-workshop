import './App.css'

import * as React from 'react'

import { DocLanding } from '../DocLanding/DocLanding'
import { Router } from '@reach/router'

export const App = () => {
  return (
    <Router>
      <DocLanding path="/:docName" />
    </Router>
  )
}

export default App
