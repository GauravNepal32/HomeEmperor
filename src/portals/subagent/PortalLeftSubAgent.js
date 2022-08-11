import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PortalLeftSubAgent = () => {
  const location = useLocation().pathname;
  const [activePortal, setActivePortal] = useState("Dashboard");
  useEffect(() => {
    if (location == "/PortalSubAgent/dashboard") {
      setActivePortal("Dashboard");
    }
    else if (location === "/PortalSubAgent/overview") {
      setActivePortal("Overview");
    }
     else if (location === "/PortalSubAgent/studentList") {
      setActivePortal("MyStudent");
    } else if (location === "/PortalSubAgent/addStudent") {
      setActivePortal("AddStudent");
    } else if (location === "/PortalSubAgent/setting") {
      setActivePortal("Setting");
    }
  });
  return (
    <div className='main-container h-100'>
      <div className='portal-left-container d-flex justify-content-center h-100 contianer p-3'>
        <nav className='w-100'>
          <ul
            id='portal-menu'
            className='portal-nav-list mt-md-5 w-100 d-flex justify-content-evenly list-unstyled'>
              <Link to={"overview"}>
              <li
                className={
                  activePortal === "Overview"
                    ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                    : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                }>
                <span class='material-symbols-outlined me-md-3'>dashboard</span>
                <span className=''>Overview</span>
              </li>
            </Link>
            <Link to={"dashboard"}>
              <li
                className={
                  activePortal === "Dashboard"
                    ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                    : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                }>
                <span class='material-symbols-outlined me-md-3'>dashboard</span>
                <span className=''>Dashboard</span>
              </li>
            </Link>
            <Link to={"studentList"}>
              <li
                className={
                  activePortal === "MyStudent"
                    ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                    : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                }>
                <span class='material-symbols-outlined me-md-3'>groups_2</span>
                <span className=''>My Student</span>
              </li>
            </Link>
            <Link to={"addStudent"}>
              <li
                className={
                  activePortal === "AddStudent"
                    ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                    : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                }>
                <span class='material-symbols-outlined me-md-3'>timeline</span>
                <span className=''>Add Student</span>
              </li>
            </Link>
            <Link to={"setting"}>
              <li
                className={
                  activePortal === "Setting"
                    ? "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center active-portal"
                    : "text-center d-flex flex-md-row flex-column justify-content-md-start justify-contet-center align-items-md-center"
                }>
                <span class='material-symbols-outlined me-md-3'>settings</span>
                <span className=''>Setting</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PortalLeftSubAgent;
