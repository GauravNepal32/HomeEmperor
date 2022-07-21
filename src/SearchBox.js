import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import useFetch from "./useFetch";

const SearchBox = () => {
  const { data: countryName } = useFetch(
    "http://192.168.1.64:8000/countryName"
  );
  const { data: degreeName } = useFetch("http://192.168.1.64:8000/degreeName");
  const { data: courseName } = useFetch("http://192.168.1.64:8000/courseName");
  return (
    <div className='search-box-container d-flex flex-column justify-content-center align-content-center'>
      <div className='container px-sm-4 my-auto'>
        <button className='uni-btn disable p-3'>
          <i className='fa-solid fa-building-columns me-2'></i>Search for
          University
        </button>
        <div className='search-form-container text-center mt-4'>
          <div className=''>
            <div className='row g-1'>
              <div className='col-lg-3 col-md-4 col-12'>
                <Select options={degreeName} placeholder='Select Degree..' />
              </div>
              <div className='col-lg-3 col-md-4 col-12'>
                <Select options={countryName} placeholder='Select Country..' />
              </div>
              <div className='col-lg-3 col-md-4 col-12'>
                <Select options={courseName} placeholder='Select Course..' />
              </div>
              <div className='col-lg-2 col-12 d-flex'>
                {" "}
                <Link
                  to='/searchresult'
                  className='search-box-btn text-decoration-none w-100 text-uppercase fw-bold'>
                  <i className='fa-solid  fa-magnifying-glass me-2'></i>Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-white fw-bold'>
        Find best University with our advance search
      </p>
    </div>
  );
};;;;

export default SearchBox;