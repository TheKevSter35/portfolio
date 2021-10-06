import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/pages/home'
import Work from './components/pages/work'
import About from './components/pages/about'
import PortfolioWork from './components/pages/portfolioWork'
import ScrollToTop from './components/scrolltotop'

const MainRouter = () => {

    return (
        <Router>
            <ScrollToTop />
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/about" component={About}/>
                <Route path="/portfolio/:id" component={PortfolioWork}/>
            </Switch>
            <Footer/>
        </Router>
    )

}

export default(MainRouter)