import React from "react";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import { Switch, Route, Outlet, Routes } from "react-router-dom";
import University from "./University";
import Profile from "./Profile";
import Processing from "./Processing";
import DocumentDetails from "./Document";
import Setting from "./Setting";

const PortalRight = () => {
  return (
    <div className='main-container px-5 mt-3 ps-3'>
      <div className='container'>
        <Routes>
          <Route path='courses' element={<Courses />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='university' element={<University />}></Route>
          <Route path='processing' element={<Processing />}></Route>
          <Route path='document' element={<DocumentDetails />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='setting' element={<Setting />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default PortalRight;
