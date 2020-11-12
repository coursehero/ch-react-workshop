import * as React from 'react'
import * as ReactDOM from 'react-dom'

import reportWebVitals from './reportWebVitals'

import { App } from './components/App/App'

import './index.css'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./test-utils/browser')

  worker.start()
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
