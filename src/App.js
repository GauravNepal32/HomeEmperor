import React from "react";
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
import SearchResult from "./searchEngine/SearchResult";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./portals/studentPortal/Dashboard";
import Portal from "./portals/portal";
import DocumentDetails from "./portals/studentPortal/Document";
import Processing from "./portals/studentPortal/Processing";
import University from "./portals/studentPortal/University";
import Setting from "./portals/studentPortal/Setting";
import { AuthProvider } from "./auth";
import { RequireAuth } from "./RequireAuth";
import PortalLeftAgent from "./portals/agent/portalLeftAgent";
import PortalSelection from "./portals/portalSelction";
import PortalAgent from "./portals/agent/PortalAgent";
import AgentDashboard from "./portals/agent/AgentDashboard";
import MyStudent from "./portals/agent/MyStudent";
import AddStudent from "./portals/agent/AddStudent";
import AllUniv from "./AllUniv";
import SubAgentDashboard from "./portals/subagent/SubAgentDashboard"
import PortalSubAgent from "./portals/subagent/PortalSubAgent"
import SubAgentMyStudent from "./portals/subagent/SubAgentMyStudent"
import SubAgentAddStudent from "./portals/subagent/SubAgentAddStudent"
import SubAgentSetting from "./portals/subagent/SubAgentSetting"
import SubAgentOverView from "./portals/subagent/SubAgentOverView";
import CountryDetails from "./CountryDetails";
import {Helmet} from "react-helmet";
import RestPassword from "./RestPassword";
import ScrollToTop from "./portals/ScrollToTop";
import ServerError from "./ServerError";


const App = () => {
  return (
    <AuthProvider>
      {/* // Creating Route for different Component */}
      <Router>
        <div id='scroll-container' className='App'>
            <Helmet>
              <title>Emperor Education Network</title>
              <meta name="description" content="App Description" />
              <meta name="theme-color" content="#008f68" />
          </Helmet>
          {/* Calling Navbar Component */}
          <Navbar />
          <div className='content'>
            <ScrollToTop>
              <Routes>
                {/* Home Component */}
              <Route path='/HomeEmperor' element={<Home />}></Route>
              <Route path="/error" element={<ServerError/>}></Route>
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
                 <Route path='/UniList' element={<AllUniv />}></Route>
              {/* Calling Login container */}
              {/* <Route path='/login' element={<Login />}></Route> */}
              <Route path='/login' element={<Login />}></Route>
              <Route path='/resetPassword' element={<RestPassword />}></Route>
              {/* Portal Selection  */}
              <Route
                path='/portalSelection'
                element={
                  <RequireAuth>
                    <PortalSelection />
                  </RequireAuth>
                }></Route>

              <Route path='/portal' element={<Portal />}>
                <Route
                  index
                  element={
                    <RequireAuth>
                      {" "}
                      <Dashboard />
                    </RequireAuth>
                  }
                />
                <Route
                  path='dashboard'
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  }></Route>
                <Route
                  path='university'
                  element={
                    <RequireAuth>
                      <University />
                    </RequireAuth>
                  }></Route>
                <Route
                  path='processing'
                  element={
                    <RequireAuth>
                      <Processing />
                    </RequireAuth>
                  }></Route>
                <Route
                  path='document'
                  element={
                    <RequireAuth>
                      <DocumentDetails />
                    </RequireAuth>
                  }></Route>
                <Route path='setting' element={<RequireAuth>
                  <Setting />
                </RequireAuth>}></Route>
              </Route>

              {/* Agent Portal */}

              <Route path='/portalAgent' element={<PortalAgent />}>
                <Route
                  index
                  element={
                    <RequireAuth>
                      {" "}
                      <AgentDashboard />
                    </RequireAuth>
                  }
                />
                <Route
                  path='dashboard'
                  element={
                    <RequireAuth>
                      <AgentDashboard />
                    </RequireAuth>
                  }></Route>
                <Route
                  path='studentList'
                  element={
                    <RequireAuth>
                      <MyStudent />
                    </RequireAuth>
                  }></Route>
                <Route
                  path='addStudent'
                  element={
                    <RequireAuth>
                      <AddStudent />
                    </RequireAuth>
                  }></Route>
                <Route path='setting' element={<Setting />}></Route>
              </Route>
              {/* Sub Agent Portal */}
              <Route path="/portalSubAgent" element={<PortalSubAgent/>}>
                  <Route index element={
                    <RequireAuth>
                      <SubAgentDashboard/>
                    </RequireAuth>
                  }/>
                    <Route path='overview' element={
                    <RequireAuth>
                      <SubAgentOverView/>
                    </RequireAuth>
                  }/>
                  <Route path='dashboard' element={
                    <RequireAuth>
                      <SubAgentDashboard/>
                    </RequireAuth>
                  }/>
                  <Route path='studentList'
                  element={
                    <RequireAuth>
                      <SubAgentMyStudent/>
                    </RequireAuth>
                  }/>
                   <Route path='addStudent'
                  element={
                    <RequireAuth>
                      <SubAgentAddStudent/>
                    </RequireAuth>
                  }/>
                   <Route path='setting'
                  element={
                    <RequireAuth>
                      <SubAgentSetting/>
                    </RequireAuth>
                  }/>
              </Route>
              {/* Calling SignUP container */}
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/country/:id' element={<CountryDetails/>}/>
              <Route path='/portalAgent' element={<PortalLeftAgent />}></Route>
              {/* Calling Test Container */}
              <Route path='/test/:id' element={<TestChild />}></Route>
              <Route path='*' element={<Lost />}></Route>
            </Routes>
            </ScrollToTop>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
