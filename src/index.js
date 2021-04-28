import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import App from './App.js'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App></App>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}

reportWebVitals()
