import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [isShown, setIsShown] = useState("all");
  const navigate = useNavigate();

  const handleSubmit = async (url, postname) => {
    if (isShown === "degree" || isShown === "courses") {
      try {
        const response = await axios.post(url, { title: postname, }, {
          headers: { "Content-Type": "application/json" },
      })
        navigate("/searchResult", { state: { result: response.data, category: "title", keyword: postname } })
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const response = await axios.post(url, { name: postname }, {
          headers: { "Content-Type": "application/json" },
      })
        navigate("/searchResult", { state: { result: response.data, category: "name", keyword: postname } })
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className='search-box-container d-flex flex-column justify-content-center align-content-center'>
      <div className='container px-sm-5 my-auto'>
        <div className="d-flex search-box-btn ">
          <button
            onClick={() => { setIsShown('all') }}
            className={isShown === 'all' ? "ms-sm-3 p-2 active" : "ms-sm-3 p-2 degree-btn"}>
            All
          </button>
          <button onClick={
            () => {
              setIsShown('degree')
            }
          } className={isShown === 'degree' ? "ms-sm-3 p-2 ms-1 active" : "ms-sm-3 p-2 ms-1 degree-btn"}>
            Degree
          </button>
          <button onClick={
            () => {
              setIsShown('courses')
            }
          } className={isShown === 'courses' ? "ms-sm-3 p-2 ms-1 active" : "ms-sm-3 p-2 ms-1 degree-btn"}>
            Courses
          </button>
          <button onClick={
            () => {
              setIsShown('uni')
            }
          } className={isShown === 'uni' ? "ms-sm-3 p-2 ms-1 active" : "ms-sm-3 p-2 ms-1 degree-btn"}>
            University
          </button>
          {/* <Link to="/UniList" className='uni-btn p-md-3 p-2 ms-3' disabled>
            <i className='fa-solid fa-building-columns me-2'></i>View All University
          </Link> */}
        </div>

        <div className='search-form-container text-center mt-4'>
          <div className=''>
            <form action="" method="">
              <div className="d-flex">
                {isShown === "all" && <input type="text" id="allInput" className="form-control" placeholder="Search..." />}
                {isShown === "degree" && <input type="text" id="degreeInput" name="degree" className="form-control" placeholder="Search for Degree..." />}
                {isShown === "courses" && <input type="text" id="coursesInput" className="form-control" placeholder="Search for Courses..." />}
                {isShown === "uni" && <input type="text" id="universityInput" className="form-control" placeholder="Search for University..." />}
                <button onClick={
                  (e) => {
                    e.preventDefault();
                    if (isShown === "all") {
                      handleSubmit("all", document.getElementById("allInput").value, "name");
                    } else if (isShown === "degree") {
                      handleSubmit("https://heuristic-wescoff.128-199-28-111.plesk.page/api/search-degrees", document.getElementById("degreeInput").value, "title");
                    } else if (isShown === "courses") {
                      handleSubmit("https://heuristic-wescoff.128-199-28-111.plesk.page/api/search-courses", document.getElementById("coursesInput").value, "title");
                    } else if (isShown === "uni") {
                      handleSubmit("https://heuristic-wescoff.128-199-28-111.plesk.page/api/search-universities", document.getElementById("universityInput").value, "name");
                    }
                  }
                } className='search-box-active-btn text-decoration-none text-uppercase fw-bold'>
                  <i className='fa-solid  fa-magnifying-glass me-sm-2 me-1'></i><span>Search</span>
                </button>
              </div>
            </form>
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
