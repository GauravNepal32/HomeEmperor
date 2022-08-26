import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallBack from "./CallBack";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading"
import { Helmet } from "react-helmet";

const Subject = () => {
  const {id}  = useParams();
  const [allSubject, setAllSubject] = useState([]);
  const [renderApp,setRenderApp]=useState(false);
  const [country, setCountry] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem("token"));

  const [likeCourse, setLikeCourse] = useState([])
  const navigate = useNavigate();
  const coursePostURL = "https://elscript.co/github/emperor-backend/api/add-course"
  const courseGetURL = "https://elscript.co/github/emperor-backend/api/get-courses"

  useEffect(() => {
    if (userData !== null) {
      axios.get(courseGetURL,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`
          }
        }
      ).then((response) => {
        response.data.data.map((allFav) => {
          if (Number(allFav.course_id) === Number(id)) {
            setLikeCourse(allFav)
            // console.log("Found")
            // setFav(true)
            // setRenderApp(false)
          } else {
            // setFav(false)
            // setRenderApp(false)
          }
        })
      })
    }
  }, [id])
useEffect(()=>{
  axios.get("https://elscript.co/github/emperor-backend/api/courses").then((response)=>{
    response.data.data.map((subject)=>{
      if(subject.id.toString() === id.toString() ){
        setAllSubject(subject)
        setRenderApp(false);
      }else{
      }
    })
  })
},[id])



  const addCourse = async (courseID) => {
    try {
      const response =
        await axios.post(coursePostURL, {
          course_id: courseID
        }, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`
          }
        })
      if (response.data.statusCode === 200) {
        document.getElementById('favourite-icon').classList.add('addedItem')
      }

    } catch (err) {
      console.log(err);
    }
  }
  const handleFav = (courseID) => {
    if (userData === null) {
      navigate('/login')
    } else {
      addCourse(courseID);
    }
  }
  useEffect(() => {
    if (allSubject.length !== null) {
      axios.get('https://elscript.co/github/emperor-backend/api/countries').then((response) => {
        response.data.data.map((country) => {
          if (country.id === allSubject.country_id) {
            setCountry(country)
            setRenderApp(true)
          }
        })
      })
    }
  }, [allSubject])

  const checkLike = (a) => {
    console.log(a)
    if (a.length !== 0) {
      console.log(true)
      if (Number(id) === Number(a.course_id)) {
        console.log(true)
        return true
      }
    } return false
  }
  return (
    <div className='main-container my-5'>
      {!renderApp ? <Loading/> : (
         <div className='container px-md-5 px-2'>
        {allSubject && (
          <div className='row m-0 '>
              <Helmet>
                <title>{allSubject.title} in {country.name} | Emperor</title>
              </Helmet>

            <div className='col-md-8 col-12'>
                <div className="courses-header-container d-flex">
                  <div className="container px-0">
                    <h1 className='fw-bold text-sm-start'>
                      {allSubject.title} in {country.name}
                    </h1>
                    <h2 className='mt-4 fw-light text-sm-start'>
                      Why study {allSubject.title} in {country.name}?
                    </h2>
                    <p className='subject-paragraph mb-5'>{allSubject.description}</p>
                  </div>
                  <div className="courses-react-container">
                    <div className="d-flex justify-content-end">
                      {/* {chechFav(uni.university_id)} */}
                      <button onClick={() => { handleFav(allSubject.id) }} className="btn favourite-btn">
                        {/* <span id="favourite-icon" className="material-symbols-outlined text-end favourite-icon text-danger">
                          favorite
                        </span> */}
                        <span id="favourite-icon" className={!checkLike(likeCourse) ? "material-symbols-outlined text-end favourite-icon text-danger" : "material-symbols-outlined text-end favourite-icon text-danger addedItem"}>
                          favorite
                        </span>
                      </button>

                    </div>
                  </div>
                </div>


              {/* <ul className='list-unstyled subject-info-list my-4'>
                <li>
                  {Courses.HighLights.map((HighLight) => (
                    <ListWithIcons HighLight={HighLight} />
                  ))}
                </li>
              </ul> */}
              <div className='subject-image-container'>
                {/* <img
                  className='img-fluid'
                  src={Courses.subjectImage}
                  alt={Courses.subjectImageAlt}
                /> */}
              </div>
              {/* <p className='subject-sub-heading mt-5'>
                {Courses.subjectName} in {Courses.country}
              </p> */}
              {/* <div className='subject-about-container'>
                <p className='subject-paragraph text-justify mb-5'>
                  {Courses.text1}
                </p>

                <p className='subject-paragraph mb-5'>{Courses.text2}</p>
              </div> */}

              {/* <div className='university-course-info-container'>
                <p className='subject-sub-heading'>
                  University with MBA in {Courses.subjectName}
                </p>
                <table className='table table-bordered mt-4 expand-table university-course-table'>
                  <thead>
                    <tr>
                      <th scope='col'>{Courses.Table1[0].ColHeading1}</th>
                      <th scope='col fw-bold'>
                        {Courses.Table1[0].ColHeading2}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Courses.Table1[1].tableData.map((tableData) => (
                      <TableBodyData varTableData={tableData} />
                    ))}
                  </tbody>
                </table>
              </div> */}
            </div>
            <CallBack />
          </div>
        )}
      </div>
      ) }

    </div>
  );
};

export default Subject;
