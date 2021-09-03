import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './components/pages/home'
import About from './components/pages/about'
import PortfolioWork from './components/pages/portfolioWork'
const MainRouter = () => {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/portfolio/:id" component={PortfolioWork}/>
            </Switch>

        </Router>
    )

}

export default(MainRouter)