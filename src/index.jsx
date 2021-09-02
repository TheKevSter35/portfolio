import {React} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import store from './store'
import Header from './components/header'
import Home from './components/pages/home'
import PortfolioWork from './components/pages/portfolioWork'
import About from './components/pages/about'

import '../src/assets/styles/main.scss'
require('dotenv').config()

ReactDOM.render(
    <Provider store={store}>
    <Router>
          <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/portfolio/:id" exact component={PortfolioWork}/>
            </Switch>

        </Router>
</Provider>,
document.getElementById('root')) 

