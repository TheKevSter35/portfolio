import React from 'react'
import {BrowserRouter as Router, Switch, Route, useLocation, Redirect} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/pages/home'
import Work from './components/pages/work'
import About from './components/pages/about'
import PortfolioWork from './components/pages/portfolioWork'
import {useTranslation} from "react-i18next";

import {AnimatePresence} from 'framer-motion'

const MainRouter = () => {
    const [t,
        i18n] = useTranslation('common');

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

    // if(window.location.pathname === '/nl'){
    //     i18n.changeLanguage('nl')
    // }else{
    //     i18n.changeLanguage('en')
    // }

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