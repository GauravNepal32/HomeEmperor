import React,{useEffect,useState} from "react";
import courseImg from "../../images/coursesThumbnail/satThumbnail.png";
import { Link } from "react-router-dom";
// import acceptedImg from "../images/process/accepted.png";
import uniImg from "../../images/university/hardvard.png";
import uniImg1 from "../../images/university/londonmet.png";
import Loading from "../../Loading"

import axios from "axios";
import ActivityGraph from "./ActivityGraph";

const Dashboard = () => {
  // const userData = sessionStorage.getItem("token");
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const userToken=userData.token
  const activities="https://elscript.co/github/emperor-backend/api/activities"
  const [activity,setActivity]=useState();
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios.get(activities,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          }}).then((response)=>{
            setActivity(response.data.data)
            setLoading(false)
    }).catch((err)=>{
      setLoading(false)
      console.log(err)
    })
  }, []);




  return (
    <div className='main-container '>
      {loading ? <Loading/>: (
        <div className="px-sm-5 p-4 p-0 mb-5 container">
         <div className='row row-cols-1'>
        <div className='col order-1'>

          <h4 className='mt-4'>Continue Watching</h4>
          <div className='courses-card-container d-flex mt-3'>
            <div className='course-card'>
              <div className='card'>
                <div className='card-thumbnail'>
                  <img className='img-fluid' src={courseImg} alt='' />
                  <div className='course-completion-time px-2'>1 hrs</div>
                </div>
                <div className='card-body'>
                  <div className='course-card-heading'>
                    <h5>SAT Preparation Course</h5>
                  </div>
                  <div className='course-card-creator'>
                    <p>John Smith</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='course-card'>
              <div className='card'>
                <div className='card-thumbnail'>
                  <img className='img-fluid' src={courseImg} alt='' />
                  <div className='course-completion-time px-2'>1 hrs</div>
                </div>
                <div className='card-body'>
                  <div className='course-card-heading'>
                    <h5>SAT Preparation Course</h5>
                  </div>
                  <div className='course-card-creator'>
                    <p>John Smith</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='course-card'>
              <div className='card'>
                <div className='card-thumbnail'>
                  <img className='img-fluid' src={courseImg} alt='' />
                  <div className='course-completion-time px-2'>1 hrs</div>
                </div>
                <div className='card-body'>
                  <div className='course-card-heading'>
                    <h5>SAT Preparation Course</h5>
                  </div>
                  <div className='course-card-creator'>
                    <p>John Smith</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col order-0 my-5 my-md-0'>
          <div className='processing-status-details p-3'>
            <div className='process-heading d-flex justify-content-between align-items-center'>
              <h4 className='mt-md-3'>Processing Status</h4>
              <Link
                className='text-black fw-bold more-content-link'
                to={"/portal/processing"}>
                View All
              </Link>
            </div>
            <div className='processing-status-container'>
              <div className='process-heading'>Visa Processing</div>
              <div className='latest-upadte-container'>
                Latest Update:{activity.at(0).title}
              </div>
              <div className='processing-timeline-container mt-4'>
                <div className='d-flex'>
                  {<ActivityGraph userActivity={activity}/>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-courses-container mt-5'>
        <div className='courses-heading d-flex justify-content-between'>
          <h4>My Courses</h4>
          <Link
            className='text-black fw-bold more-content-link'
            to={"/portal/courses"}>
            View All
          </Link>
        </div>
        <div className='course-card-wrapper mt-3 mb-5 d-flex'>
          <div className='course-card'>
            <div className='card'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={courseImg} alt='' />
                <div className='course-completion-time px-2'>1 hrs</div>
              </div>
              <div className='card-body'>
                <div className='course-card-heading'>
                  <h5>SAT Preparation Course</h5>
                </div>
                <div className='course-card-creator'>
                  <p>John Smith</p>
                </div>
              </div>
            </div>
          </div>
          <div className='course-card'>
            <div className='card'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={courseImg} alt='' />
                <div className='course-completion-time px-2'>1 hrs</div>
              </div>
              <div className='card-body'>
                <div className='course-card-heading'>
                  <h5>SAT Preparation Course</h5>
                </div>
                <div className='course-card-creator'>
                  <p>John Smith</p>
                </div>
              </div>
            </div>
          </div>
          <div className='course-card'>
            <div className='card'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={courseImg} alt='' />
                <div className='course-completion-time px-2'>1 hrs</div>
              </div>
              <div className='card-body'>
                <div className='course-card-heading'>
                  <h5>SAT Preparation Course</h5>
                </div>
                <div className='course-card-creator'>
                  <p>John Smith</p>
                </div>
              </div>
            </div>
          </div>
          <div className='course-card'>
            <div className='card'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={courseImg} alt='' />
                <div className='course-completion-time px-2'>1 hrs</div>
              </div>
              <div className='card-body'>
                <div className='course-card-heading'>
                  <h5>SAT Preparation Course</h5>
                </div>
                <div className='course-card-creator'>
                  <p>John Smith</p>
                </div>
              </div>
            </div>
          </div>
          <div className='course-card'>
            <div className='card'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={courseImg} alt='' />
                <div className='course-completion-time px-2'>1 hrs</div>
              </div>
              <div className='card-body'>
                <div className='course-card-heading'>
                  <h5>SAT Preparation Course</h5>
                </div>
                <div className='course-card-creator'>
                  <p>John Smith</p>
                </div>
              </div>
            </div>
          </div>
          <div className='course-card'>
            <div className='card'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={courseImg} alt='' />
                <div className='course-completion-time px-2'>1 hrs</div>
              </div>
              <div className='card-body'>
                <div className='course-card-heading'>
                  <h5>SAT Preparation Course</h5>
                </div>
                <div className='course-card-creator'>
                  <p>John Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-university-container'>
        <div className='courses-heading d-flex justify-content-between'>
          <h4>My University</h4>
          <Link
            className='text-black fw-bold more-content-link'
            to={"/portal/university"}>
            View All
          </Link>
        </div>
        <div className='university-card-wrapper mt-3 mb-5 d-flex'>
          <div className='university-card'>
            <div className='card p-2'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={uniImg} alt='' />
              </div>
              <div className='card-body'>
                <div className='university-card-heading'>
                  <h5>Harvard University</h5>
                </div>
                <div className='university-card-creator'>
                  <p>Accounting</p>
                </div>
              </div>
            </div>
          </div>
          <div className='university-card'>
            <div className='card p-2'>
              <div className='card-thumbnail'>
                <img className='img-fluid' src={uniImg1} alt='' />
              </div>
              <div className='card-body'>
                <div className='course-card-heading'>
                  <h5>London Metropolitan University</h5>
                </div>
                <div className='university-card-creator'>
                  <p>John Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

      ) }

    </div>
  );
};

export default Dashboard;
