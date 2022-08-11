import React, { useState, useEffect, useRef } from "react";
import NavbarMainLogo from "./images/emperor/companyLogo.png";
import MajorList from "./MajorList";
import useFetch from "./useFetch";
import SubjectList from "./SubjectList";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth";
import OtherCountry from "./OtherCountry";

const Navbar = () => {
  const auth = useAuth();
  const [majorList, setMajorList] = useState();
  const [coursesList,setCoursesList]=useState();
  const [navOpen, setNavOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [countries,setCountries]=useState();
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const [renderApp,setRenderApp]=useState(false);

  useEffect(() => {

Promise.all([
  axios
      .get("https://heuristic-wescoff.128-199-28-111.plesk.page/api/degrees"),
        axios.get('https://heuristic-wescoff.128-199-28-111.plesk.page/api/countries'),
          axios.get('https://heuristic-wescoff.128-199-28-111.plesk.page/api/courses')

]).then(allResponse =>{
  setMajorList(allResponse[0].data.data);
  setCountries(allResponse[1].data.data.slice(0,allResponse[1].data.data.length-4));
  setCoursesList(allResponse[2].data.data);
  setRenderApp(true)
})

  }, []);

  useEffect(() => {
    if (userData == null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  },[userData]);

  function disableScroll() {
    document.getElementById("scroll-container").classList.add("avoid-Scroll");
  }
  function enableScroll() {
    document
      .getElementById("scroll-container")
      .classList.remove("avoid-Scroll");
  }
  function toggleNav() {
    setNavOpen((state) => !state);
    enableScroll();
  }

  return (
    <header className='mx-0 px-0'>
      {renderApp && <nav className='navbar navbar-expand-lg main-navbar'>
        <div className='container-md  px-sm-5'>
          <NavLink className='navbar-brand' to='/HomeEmperor'>
            <img
              src={NavbarMainLogo}
              alt='Company Logo'
              className='d-inline-block img-fluid align-text-top'
            />
          </NavLink>

          <Link
            to={!isLogin ? "/login" : "/portal/dashboard"}
            className='btn d-lg-none d-block my-auto ms-auto p-0 account-btn'>
            <span className=' my-auto material-symbols-outlined'>
              account_circle
            </span>
          </Link>
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
            <div className='collapse-toggler-container d-lg-none '>
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
                          onMouseOver={disableScroll}
                          onMouseLeave={enableScroll}
                          className='col p-3 overflow-hidden'>
                          <div className='long-sub-2'>
                            <ul className='list-unstyled'>
                              <li className='alphabet-heading'>A-H</li>
                              {coursesList && (
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
                  {console.log(countries)}
                 <OtherCountry countries={countries} disableScroll={disableScroll} enableScroll={enableScroll} toggleNav={toggleNav}/>
                </li>
              </ul>
            </div>
            <div className='p-lg-0 p-2 pe-3 d-lg-flex d-none '>
              {!isLogin ? (
                <Link
                  to='/login'
                  className='btn btn-type-2 p-2 me-3 d-lg-block d-none text-nowrap w-100'>
                  Log In
                </Link>
              ) : (
                <Link to='/portalSelection' className='text-black'>
                  <span class='material-symbols-outlined'>account_circle</span>
                </Link>
              )}
              {/* {isLogin ? (
                <>
                  <Link to='/portal' className='text-black'>
                    <span class='material-symbols-outlined'>
                      account_circle
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to='/portal'
                    className='btn btn-type-2 p-2 me-3 d-lg-block d-none text-nowrap w-100'>
                    Log In
                  </Link>
                  <Link
                    to='/signup'
                    className='btn btn-type-1 p-2  text-nowrap w-100'>
                    Get Free Advice
                  </Link>
                </>
              )} */}
            </div>
          </div>
        </div>
      </nav> }

    </header>
  );
};

export default Navbar;
