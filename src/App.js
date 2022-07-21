import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Major from "./Major";
import Subject from "./subject";
import Lost from "./Lost";
import About from "./About";
import Contact from "./Contact";
import TestPrep from "./testPrep";
import TestChild from "./TestChild";
import SearchResult from "./SearchResult";

const App = () => {
  return (
    <Router>
      <div id='scroll-container' className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/HomeEmperor'>
              <Home />
            </Route>
            <Route path='/major/:id'>
              <Major />
            </Route>
            <Route path='/subject/:id'>
              <Subject />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/testPrep'>
              <TestPrep />
            </Route>
            <Route path='/searchresult'>
              <SearchResult />
            </Route>
            <Route path='/test/:id'>
              <TestChild />
            </Route>
            <Route path='*'>
              <Lost />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
