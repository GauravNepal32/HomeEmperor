import React, { useState, useEffect, useRef } from "react";
import NavbarMainLogo from "./images/emperor/companyLogo.png";
import MajorList from "./MajorList";
import SubjectList from "./SubjectList";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth";
import OtherCountry from "./OtherCountry";
import Notification from "./Notification";



const Navbar = () => {
  const auth = useAuth();
  const [majorList, setMajorList] = useState();
  const [coursesList,setCoursesList]=useState();
  const [navOpen, setNavOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [countries, setCountries] = useState();
  const [renderApp,setRenderApp]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef();

// Logging out the user
  const handleLogout = () => {
    // Calling auth from auth component for logout
    auth.logout();
  }

  useEffect(() => {

// Running multiple promise
Promise.all([
  axios
    .get("https://elscript.co/github/emperor-backend/api/degrees"),
  axios.get('https://elscript.co/github/emperor-backend/api/countries'),
  axios.get('https://elscript.co/github/emperor-backend/api/courses')

]).then(allResponse =>{
  // setting response from ppromise to array
  setMajorList(allResponse[0].data.data);
  setCountries(allResponse[1].data.data.slice(0,allResponse[1].data.data.length-4));
  setCoursesList(allResponse[2].data.data);
  setRenderApp(true)
})

  }, []);

// disable scroll when navbar is open
  function disableScroll() {
    document.getElementById("scroll-container").classList.add("avoid-Scroll");
  }
  // Enable scroll when navbar is close
  function enableScroll() {
    document
      .getElementById("scroll-container")
      .classList.remove("avoid-Scroll");
  }
  // onclick hide the navbar for small screen
  function toggleNav() {
    setNavOpen((state) => !state);
    enableScroll();
  }


// toggle notification for the uer
  function toggleDiv(id, event) {
    setIsOpen(!isOpen);
    var div = document.getElementById(id);
    div.style.display = div.style.display === "block" ? "none" : "block";
    if (!div.contains(event.target)) {
      div.style.display = 'none';
    }

  }


  return (
    <header className='mx-0 px-0'>
      {/* Checking if the api call was resolved or not */}
      {renderApp && <nav className='navbar navbar-expand-lg main-navbar'>
        <div className='container-md  px-sm-5'>
          <NavLink className='navbar-brand' to='/HomeEmperor'>
            <img
              src={NavbarMainLogo}
              alt='Company Logo'
              className='d-inline-block img-fluid align-text-top'
            />
          </NavLink>

          <div className='p-lg-0 p-md-1 order-lg-2 ms-auto d-flex'>
            {!auth.isLogin ? (
              <Link
                to='/login'
                className='btn btn-type-2 p-2 me-3 d-block text-nowrap w-100'>
                Log In
              </Link>
            ) : (
              <div className="d-flex align-items-center">
                <div className="">
                  {/* Notification icons */}
                  <div className="btn my-auto ms-auto p-0 account-btn">
                    <button ref={myRef} onClick={() => {
                      toggleDiv('notification-container')
                    }} className="btn notification-bell me-md-2">
                      <span className={isOpen ? "material-symbols-outlined material-symbols-outlined-active " : "material-symbols-outlined"}>
                        notifications
                      </span>
                        <span className="d-flex justify-content-center align-items-center" id="notification-num">3</span>
                      </button>
                      {/* Notification container */}
                      <div id="notification-container" className="notification-container">
                        <Notification />
                      </div>
                    </div>

                  </div>
                  {/* Logout button */}
                  <div onClick={handleLogout} className="btn my-auto me-md-3 me-2 p-0">
                    <span class="material-symbols-outlined">
                      logout
                    </span>
                  </div>
                  {/* Portal redirect button */}
                  <Link to='/portalSelection' className='text-black'>
                    <span className='material-symbols-outlined'>account_circle</span>
                  </Link>
              </div>
            )}
          </div>
          <button
            onClick={toggleNav}
            className={
              navOpen
                ? "navbar-toggler text-balck"
                : "navbar-toggler collapsed text-black"
            }
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'>
              <i className='bi bi-list'></i>
            </span>
          </button>
          <div
            className={
              navOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id='navbarNavDropdown'>
            <div className='collapse-toggler-container d-lg-none order-lg-1 '>
              <nav className='navbar navbar-expand-lg main-navbar d-flex justify-content-between align-item-center'>
                <div className='container-md  px-sm-5'>
                  <NavLink
                    onClick={toggleNav}
                    className='navbar-brand'
                    to='/HomeEmperor'>
                    <img
                      src={NavbarMainLogo}
                      alt='Company Logo'
                      className='d-inline-block small-company-logo img-fluid align-text-top'
                    />
                  </NavLink>
                  <button
                    onClick={toggleNav}
                    className={
                      navOpen ? "navbar-toggler" : "navbar-toggler collapsed"
                    }
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon-open'>
                      <i className='bi bi-list'></i>
                    </span>
                  </button>
                </div>
              </nav>
            </div>
            <div className='d-flex w-100 justify-content-start navbarNav justify-content-lg-center'>
              <ul className='navbar-nav'>
                <li className='nav-item home-dropDown dropdown'>
                  <div
                    className='nav-link dropdown-link d-flex dropDownTrigger'
                    id='navbarDropdownMenuLink'
                    role='button'
                    data-bs-toggle='dropdown'
                    onMouseOver={disableScroll}
                    onMouseLeave={enableScroll}>
                    Home
                    <span className='drop-icon'>
                      <i className='bi bi-chevron-down'></i>
                    </span>
                  </div>
                  <ul
                    onMouseOver={disableScroll}
                    onMouseLeave={enableScroll}
                    className='list-unstyled small-dropdown navbar-dropdown-container home-dropdown-container'
                    aria-labelledby='navbarDropdownMenuLink'>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        data-toggle='collapse'
                        data-target='.navbar-collapse.show'
                        className='dropdown-item'
                        to='/about'>
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='a'>
                        Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='/testPrep'>
                        Test Preparation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='/contact'>
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='nav-item usa-dropDown dropdown'>
                  {/* Navbar for USA */}
                  <div
                    className='nav-link dropdown-link dropDownTrigger d-flex usa-dropDown'
                    id='usa-dropDown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    USA{" "}
                    <span className='drop-icon'>
                      <i className='bi bi-chevron-down'></i>
                    </span>
                  </div>
                  <ul
                    className='list-unstyled usa-dropdown-container overflow-hidden navbar-dropdown-container long-dropdown'
                    aria-labelledby='navbarDropdownMenuLink'>
                    <li className=''>
                      <div className='row row-cols-lg-4 row-cols-1 '>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col sub-first-col p-3'>
                          <div className='long-sub-1'>
                            {majorList && (
                              // Displaying all major list for USA
                              <MajorList
                                majorList={majorList}
                                countryName='USA'
                                disableScroll={disableScroll}
                                enableScroll={enableScroll}
                                toggleNav={toggleNav}
                              />
                            )}
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {coursesList && (
                                // Displaying the subject list for column 1 for USA
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={coursesList}
                                  countryName='3'
                                  disableScroll={disableScroll}
                                  enableScroll={enableScroll}
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {coursesList && (
                                // Displaying the subject list for column 2 for USA
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={coursesList}
                                  countryName='3'
                                  disableScroll={disableScroll}
                                  enableScroll={enableScroll}
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {coursesList && (
                                // Displaying the subject list for column 3 for USA
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={coursesList}
                                  countryName='3'
                                  disableScroll={disableScroll}
                                  enableScroll={enableScroll}
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className='nav-item uk-dropDown'>
                  {/* Navbar for UK */}
                  <div
                    className='nav-link dropdown-link d-flex dropDownTrigger uk-dropDown'
                    id='uk-dropDown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    UK{" "}
                    <span className='drop-icon'>
                      <i className='bi bi-chevron-down'></i>
                    </span>
                  </div>
                  <ul
                    className='list-unstyled uk-dropdown-container overflow-hidden navbar-dropdown-container long-dropdown'
                    aria-labelledby='navbarDropdownMenuLink'>
                    <li className=''>
                      <div className='row row-cols-lg-4 row-cols-1 '>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col sub-first-col p-3'>
                          <div className='long-sub-1'>
                            {majorList && (
                              // Displaying all major lis tfor UK
                              <MajorList
                                majorList={majorList}
                                countryName='UK'
                                toggleNav={toggleNav}
                              />
                            )}
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {coursesList && (
                                // Displaying subject list for column 1 for UK
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={coursesList}
                                  countryName='2'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {coursesList && (
                                // Displaying subject list for column 2 for UK

                                <SubjectList
                                  colNumber='2'
                                  countryCourses={coursesList}
                                  countryName='2'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {coursesList && (
                                // Displaying subject list for column 3 for UK
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={coursesList}
                                  countryName='2'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className='nav-item canada-dropDown'>
                  {/* Navbar for canada */}
                  <div
                    className='nav-link dropdown-link dropDownTrigger d-flex canada-dropDown'
                    id='canada-dropDown'
                    role='button'>
                    Canada
                    <span className='drop-icon'>
                      <i className='bi bi-chevron-down'></i>
                    </span>
                  </div>
                  <ul
                    className='list-unstyled canada-dropdown-container overflow-hidden navbar-dropdown-container long-dropdown'
                    aria-labelledby='navbarDropdownMenuLink'>
                    <li className=''>
                      <div className='row row-cols-lg-4 row-cols-1 '>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col sub-first-col p-3'>
                          <div className='long-sub-1'>
                            {majorList && (
                              // Displaying all major for canada
                              <MajorList
                                majorList={majorList}
                                countryName='Canada'
                                toggleNav={toggleNav}
                              />
                            )}
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {coursesList && (
                                // Displaying subject column 1 for Canada
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={coursesList}
                                  countryName='4'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {coursesList && (
                                // Displaying subject column 2 for Canada

                                <SubjectList
                                  colNumber='2'
                                  countryCourses={coursesList}
                                  countryName='4'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {coursesList && (
                                // Displaying subject column 3 for Canada
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={coursesList}
                                  countryName='4'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Navbar for Australia */}
                <li className='nav-item aus-dropDown'>
                  <div className='nav-link d-flex aus-dropDown' role='button'>
                    Australia
                    <span className='drop-icon'>
                      <i className='bi bi-chevron-down'></i>
                    </span>
                  </div>
                  <ul
                    className='list-unstyled aus-dropdown-container overflow-hidden navbar-dropdown-container long-dropdown'
                    aria-labelledby='navbarDropdownMenuLink'>
                    <li className=''>
                      <div className='row row-cols-lg-4 row-cols-1 '>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col sub-first-col p-3'>
                          <div className='long-sub-1'>
                            {/* Major list display for australia */}
                            {majorList && (
                              <MajorList
                                majorList={majorList}
                                countryName='Australia'
                                toggleNav={toggleNav}
                              />
                            )}
                          </div>
                        </div>
                        <div
                        // Subject list display for australia
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {coursesList && (
                                // Australia first column
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={coursesList}
                                  countryName='5'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>I-O</li>
                              {coursesList && (
                                // Australia second column

                                <SubjectList
                                  colNumber='2'
                                  countryCourses={coursesList}
                                  countryName='5'
                                  enableScroll={enableScroll}
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                        <div
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>P-Z</li>
                              {coursesList && (
                                // Australia third column

                                <SubjectList
                                  colNumber='3'
                                  countryCourses={coursesList}
                                  countryName='5'
                                  toggleNav={toggleNav}
                                />
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className='nav-item home-dropDown dropdown'>
                  <div
                    className='nav-link dropdown-link d-flex dropDownTrigger'
                    id='navbarDropdownMenuLink'
                    role='button'
                    data-bs-toggle='dropdown'
                    onMouseOver={disableScroll}
                    onMouseLeave={enableScroll}>
                      Other
                    <span className='drop-icon'>
                      <i className='bi bi-chevron-down'></i>
                    </span>
                  </div>
                  {/* Navbar to dispay other country */}
                 <OtherCountry countries={countries} disableScroll={disableScroll} enableScroll={enableScroll} toggleNav={toggleNav}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> }

    </header>
  );
};

export default Navbar;
