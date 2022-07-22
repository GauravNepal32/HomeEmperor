import React from "react";
import NavbarMainLogo from "./images/emperor/companyLogo.png";
import MajorList from "./MajorList";
import useFetch from "./useFetch";
import SubjectList from "./SubjectList";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { data: countrySub } = useFetch(" http://192.168.1.64:8000/major");
  const { data: USCourses } = useFetch("http://192.168.1.64:8000/subject");
  const [navOpen, setNavOpen] = useState(false);

  // if (document.getElementsByClassName('navbar-dropdown-container').style.display = 'none') {

  // }

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
      <nav className='navbar navbar-expand-lg main-navbar'>
        <div className='container-md  px-sm-5'>
          <NavLink className='navbar-brand' to='/HomeEmperor'>
            <img
              src={NavbarMainLogo}
              alt='Company Logo'
              className='d-inline-block img-fluid align-text-top'
            />
          </NavLink>
          <button
            onClick={toggleNav}
            className={navOpen ? "navbar-toggler" : "navbar-toggler collapsed"}
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
                  <NavLink className='navbar-brand' to='/HomeEmperor'>
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
                    <span className='navbar-toggler-icon'>
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
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='USA'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='USA'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='USA'
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
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='UK'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='UK'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='UK'
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
                  <div className='nav-link d-flex canada-dropDown'>
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
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='Canada'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='Canada'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='Canada'
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
                  <div className='nav-link d-flex aus-dropDown'>
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
                            {countrySub && (
                              <MajorList
                                countrySub={countrySub}
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='1'
                                  countryCourses={USCourses}
                                  countryName='Australia'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='2'
                                  countryCourses={USCourses}
                                  countryName='Australia'
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
                              {USCourses && (
                                <SubjectList
                                  colNumber='3'
                                  countryCourses={USCourses}
                                  countryName='Australia'
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
              </ul>
            </div>
            <div className='p-lg-0'>
              <button className='btn w-100 btn-type-1 text-nowrap p-2'>
                Get Free Advice
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
