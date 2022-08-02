import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Major from "./Major";
import Subject from "./subject";
import Lost from "./Lost";
import About from "./About";
import Contact from "./Contact";
import TestPrep from "./testPrep";
import TestChild from "./TestChild";
import SearchResult from "./SearchResult";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./portals/Dashboard";
import Portal from "./portals/portal";
import Courses from "./portals/Courses";
import DocumentDetails from "./portals/Document";
import Processing from "./portals/Processing";
import Profile from "./portals/Profile";
import University from "./portals/University";
import Setting from "./portals/Setting";

const App = () => {
  return (
    // Creating Route for different Component
    <Router>
      <div id='scroll-container' className='App'>
        {/* Calling Navbar Component */}
        <Navbar />
        <div className='content'>
          <Routes>
            {/* Home Component */}
            <Route path='/HomeEmperor' element={<Home />}></Route>

            {/* Major For every country */}
            <Route path='/major/:id' element={<Major />}></Route>
            {/* Subject for every country */}
            <Route path='/subject/:id' element={<Subject />}></Route>
            {/* Calling About Container */}
            <Route path='/about' element={<About />}></Route>
            {/* Calling contanct container */}
            <Route path='/contact' element={<Contact />}></Route>
            {/* Calling testPrep container */}
            <Route path='/testPrep' element={<TestPrep />}></Route>
            {/* Calling search result container */}
            <Route path='/searchresult' element={<SearchResult />}></Route>
            {/* Calling Login container */}
            <Route path='/login' element={<Login />}></Route>
            <Route path='/portal' element={<Portal />}>
              <Route path='courses' element={<Courses />}></Route>
              <Route path='dashboard' element={<Dashboard />}></Route>
              <Route path='university' element={<University />}></Route>
              <Route path='processing' element={<Processing />}></Route>
              <Route path='document' element={<DocumentDetails />}></Route>
              <Route path='profile' element={<Profile />}></Route>
              <Route path='setting' element={<Setting />}></Route>
            </Route>
            {/* Calling SignUP container */}
            <Route path='/signup' element={<SignUp />}></Route>
            {/* Calling dashboard container */}
            <Route path='/dashboard' element={<Dashboard />}></Route>
            {/* Calling Test Container */}
            <Route path='/test/:id' element={<TestChild />}></Route>
            <Route path='*' element={<Lost />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
