import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Work from "./components/pages/work";
import About from "./components/pages/about";
import PortfolioWork from "./components/pages/portfolioWork";
import ScrollToTop from "./components/functions/scrolltotop";
import { AnimatePresence } from "framer-motion";

const MainRouter = () => {
  function NoMatch() {
    let location = useLocation();

    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            from: location,
          },
        }}
      />
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/werk" component={Work} />
          <Route path="/overmij" component={About} />
          <Route path="/project/:id" exact component={PortfolioWork} />
          <Route path="/project/:slug" exact component={PortfolioWork} />
          <Route path="/en" exact component={Home} />
          <Route path="/en/work" component={Work} />
          <Route path="/en/about" component={About} />
          <Route path="/en/project/:id" exact component={PortfolioWork} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
};

export default MainRouter;
