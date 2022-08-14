import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import useFetch from "./useFetch";
import axios from "axios";
import NoResponse from "./NoResponse";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {

  const [countryName, setCountryName] = useState([]);
  const countryList = [];
  const degreeList = [];
  const [degree, setDegree] = useState([]);
  const courseList = [];
  const [courses, setCourses] = useState([]);
  const [isShown, setIsShown] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://heuristic-wescoff.128-199-28-111.plesk.page/api/countries")
      .then((response) => {
        {
          response.data.data.map((countryArray) => {
            const countryListObject = {
              label: `${countryArray.name}`,
              value: `${countryArray.id}`,
            };
            countryList.push(countryListObject);
          });
          setCountryName(countryList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://heuristic-wescoff.128-199-28-111.plesk.page/api/degrees")
      .then((response) => {
        {
          response.data.data.map((degreeArray) => {
            const degreeListObject = {
              label: `${degreeArray.title}`,
              value: `${degreeArray.id}`,
            };
            degreeList.push(degreeListObject);
          });
          setDegree(degreeList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://heuristic-wescoff.128-199-28-111.plesk.page/api/courses")
      .then((response) => {
        {
          response.data.data.map((courseArray) => {
            const courseListObject = {
              label: `${courseArray.title}`,
              value: `${courseArray.id}`,
            };
            courseList.push(courseListObject);
          });
          setCourses(courseList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchResult")

  }

  return (
    <div className='search-box-container d-flex flex-column justify-content-center align-content-center'>
      <div className='container px-sm-5 my-auto'>
        <div className="d-flex search-box-btn ">
          <button
            onClick={() => { setIsShown('all') }}
            className={isShown === 'all' ? "ms-3 active" : "ms-3 degree-btn"}>
            <i className='fa-solid fa-building-columns me-2'></i>All
          </button>
          <button onClick={
            () => {
              setIsShown('degree')
            }
          } className={isShown === 'degree' ? "ms-3 active" : "ms-3 degree-btn"}>
            Degree
          </button>
          <button onClick={
            () => {
              setIsShown('courses')
            }
          } className={isShown === 'courses' ? "ms-3 active" : "ms-3 degree-btn"}>
            Courses
          </button>
          <button onClick={
            () => {
              setIsShown('uni')
            }
          } className={isShown === 'uni' ? "ms-3 active" : "ms-3 degree-btn"}>
            University
          </button>
          {/* <Link to="/UniList" className='uni-btn p-md-3 p-2 ms-3' disabled>
            <i className='fa-solid fa-building-columns me-2'></i>View All University
          </Link> */}
        </div>

        <div className='search-form-container text-center mt-4'>
          <div className=''>
            <form action="" method="post">
              <div className="d-flex">
                {isShown === "all" && <input type="text" className="form-control" placeholder="Search..." />}
                {isShown === "degree" && <input type="text" className="form-control" placeholder="Search for Degree..." />}
                {isShown === "courses" && <input type="text" className="form-control" placeholder="Search for Courses..." />}
                {isShown === "uni" && <input type="text" className="form-control" placeholder="Search for University..." />}
                <button onClick={handleSubmit} className='search-box-active-btn text-decoration-none text-uppercase fw-bold'>
                  <i className='fa-solid  fa-magnifying-glass me-2'></i>Search
                </button>
              </div>
            </form>


            {/* <div className='row g-1'>
              <div className='col-lg-3 col-md-4 col-12'>
                <Select options={degree} placeholder='Select Degree..' />
              </div>
              <div className='col-lg-3 col-md-4 col-12'>
                <Select options={countryName} placeholder='Select Country..' />
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                <Select options={courses} placeholder='Select Course..' />
              </div>
              <div className='col-lg-2 col-12 d-flex'>
                {" "}
                <Link
                  to='/searchresult'
                  className='search-box-btn text-decoration-none w-100 text-uppercase fw-bold'>
                  <i className='fa-solid  fa-magnifying-glass me-2'></i>Search
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <p className='text-center text-white fw-bold'>
        Find best University with our advance search
      </p>
    </div>
  );
};

export default SearchBox;
