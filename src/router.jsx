import React from 'react'
import {BrowserRouter as Router, Switch, Route, useLocation, Redirect} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/pages/home'
import Work from './components/pages/work'
import About from './components/pages/about'
import PortfolioWork from './components/pages/portfolioWork'


import {AnimatePresence} from 'framer-motion'

const MainRouter = () => {

    function NoMatch() {
        let location = useLocation();

        return (<Redirect
            to={{
            pathname: "/",
            state: {
                from: location
            }
        }}/>);
    }

    return (
        <Router>
            <Header/>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                     <Route path="/nl" exact component={Home}/>
                      <Route path="/en" exact component={Home}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/about" component={About}/>
                    <Route  path="/project/:id" exact component={PortfolioWork}/>
                    <Route path="*"><NoMatch/></Route>
                </Switch>
            </AnimatePresence>
            <Footer/>
        </Router>
    )

}

export default(MainRouter)