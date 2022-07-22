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
    // Creating Route for different Component
    <Router>
      <div id='scroll-container' className='App'>
        {/* Calling Navbar Component */}
        <Navbar />
        <div className='content'>
          <Switch>
            {/* Home Component */}
            <Route exact path='/HomeEmperor'>
              <Home />
            </Route>
            {/* Major For every country */}
            <Route path='/major/:id'>
              <Major />
            </Route>
            {/* Subject for every country */}
            <Route path='/subject/:id'>
              <Subject />
            </Route>
            {/* Calling About Container */}
            <Route path='/about'>
              <About />
            </Route>
            {/* Calling contanct container */}
            <Route path='/contact'>
              <Contact />
            </Route>
            {/* Calling testPrep container */}
            <Route path='/testPrep'>
              <TestPrep />
            </Route>
            {/* Calling search result container */}
            <Route path='/searchresult'>
              <SearchResult />
            </Route>
            {/* Calling Test Container */}
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
