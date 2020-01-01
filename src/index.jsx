import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom"
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
)
// pwa
// https://medium.com/@toricpope/transform-a-react-app-into-a-progressive-web-app-pwa-dea336bd96e6
// serviceWorker.unregister()
serviceWorker.register()