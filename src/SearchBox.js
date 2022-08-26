import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
const SearchBox = () => {
  const [isShown, setIsShown] = useState("all");
  const [searching,setSearching]=useState(false)
  const navigate = useNavigate();
  const auth=useAuth();
  const handleSubmit = async (url, postname) => {
    setSearching(true)
    if (isShown === "degree" || isShown === "courses") {
      try {
        const response = await axios.post(url, { title: postname, }, {
          headers: { "Content-Type": "application/json" },
      })
        navigate("/searchResult", { state: { result: response.data, category: "title", keyword: postname } })
      } catch (err) {
        console.log(err)
      }
    } else if (isShown==="all"){
      try{
        const response=await axios.post(url,{title:postname},{headers:{"Content-Type":"application/json"}})
        console.log(response.data)
        navigate('/searchResult',{state:{result:response.data,searchType:"all"},keyword:postname})
      }catch(err){
        console.log(err)
      }
    }

     else {
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
    <div className='search-box-container d-flex flex-column justify-content-center mt-5 align-content-center'>
      <div className='container px-0 my-auto'>
        <div className="d-flex search-box-btn ">
          <div class="form-check me-md-3 me-1">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => { setIsShown('all') }} />
            <label class="form-check-label" for="flexRadioDefault1">
              All
            </label>
          </div>
          <div class="form-check me-md-3 me-1">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={() => { setIsShown('degree') }} />
            <label class="form-check-label" for="flexRadioDefault2">
              Degree
            </label>
          </div>
          <div class="form-check me-md-3 me-1">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={() => { setIsShown('courses') }} />
            <label class="form-check-label" for="flexRadioDefault3">
              Courses
            </label>
          </div>
          <div class="form-check me-md-3 me-1">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
            <label class="form-check-label" for="flexRadioDefault4">
              University
            </label>
          </div>
          {/* <Link to="/UniList" className='uni-btn p-md-3 p-2 ms-3' disabled>
            <i className='fa-solid fa-building-columns me-2'></i>View All University
          </Link> */}
        </div>

        <div className='search-form-container text-center mt-4'>
          <div className=''>
            <form action="" method="">
              <div className="d-flex position-relative search-input-holder">
                {isShown === "all" && <input type="text" id="allInput" className="form-control" placeholder="Search..." />}
                {isShown === "degree" && <input type="text" id="degreeInput" name="degree" className="form-control" placeholder="Search for Degree..." />}
                {isShown === "courses" && <input type="text" id="coursesInput" className="form-control" placeholder="Search for Courses..." />}
                {isShown === "uni" && <input type="text" id="universityInput" className="form-control" placeholder="Search for University..." />}
                <button onClick={
                  (e) => {
                    e.preventDefault();
                    if (isShown === "all") {
                      handleSubmit(`${auth.baseURL}/api/search-all`, document.getElementById("allInput").value, "title");
                    } else if (isShown === "degree") {
                      handleSubmit(`${auth.baseURL}/api/search-degrees`, document.getElementById("degreeInput").value, "title");
                    } else if (isShown === "courses") {
                      handleSubmit(`${auth.baseURL}/api/search-courses`, document.getElementById("coursesInput").value, "title");
                    } else if (isShown === "uni") {
                      handleSubmit(`${auth.baseURL}/api/search-universities`, document.getElementById("universityInput").value, "name");
                    }
                  }
                } className='search-box-active-btn text-decoration-none text-uppercase fw-bold'>
                  {searching ? <>
                    <button class="btn" type="button" disabled>
                      <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </button>
                  </> : <>
                    <i className='fa-solid  fa-magnifying-glass'></i>
                  </>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SearchBox;
