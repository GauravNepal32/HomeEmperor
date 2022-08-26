import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
// import acceptedImg from "../images/process/accepted.png";
import Loading from "../../Loading"
import NoActivity from "./NoActivity"
import axios from "axios";
import ActivityGraph from "./ActivityGraph";
import UniversityCard from "./UniversityCard";
import MyCourses from "./MyCourses";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  // const userData = sessionStorage.getItem("token");
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const userToken=userData.token
  const activities="https://elscript.co/github/emperor-backend/api/activities"
  const [activity,setActivity]=useState([]);
  const [activityAvailable,setActivityAvailable]=useState(false);
  const [loading,setLoading]=useState(true)
  const [uniInfo,setUniInfo]=useState();
  const getUni="https://elscript.co/github/emperor-backend/api/get-universities"

  useEffect(() => {
    Promise.all([
       axios.get(activities,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          }}),
           axios.get(getUni,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          }})

    ]).then(allResponse =>{
      setActivity(allResponse[0].data.data);
      setUniInfo(allResponse[1].data.data)
      setLoading(false)

    }).catch((err)=>{
      console.log(err)
      setLoading(false)

    })
  }, []);

useEffect(()=>{
  if(activity.length===0){
    setActivityAvailable(false)
  }else if(activity.length>0){
setActivityAvailable(true);
  }
})
  return (
    <div className='main-container '>
      <Helmet>
        <title>
          Dashboard | Emperor
        </title>
      </Helmet>
      {loading ? <Loading/>: (
        <div className="px-sm-5 p-4 p-0 mb-5 container">
         <div className='row row-cols-1'>
        <div className='col order-1'>
        </div>
        <div className='col order-0 my-5 my-md-0'>
          <div className='processing-status-details p-3'>
              {activityAvailable ? (
                <>
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
                </>

              ):<NoActivity/>}

          </div>
        </div>
      </div>
      <div className='my-courses-container mt-5'>
        <div className='courses-heading d-flex justify-content-between'>
          <h4>My Courses</h4>
        </div>
        <MyCourses/>
      </div>
      <div className='my-university-container'>
        <div className='courses-heading d-flex justify-content-between'>
          <h4>My University</h4>
        </div>
        <div className='university-card-wrapper mt-3 mb-5 d-flex'>
            {!loading && <UniversityCard university={uniInfo}/>}

        </div>
      </div>
        </div>

      ) }

    </div>
  );
};

export default Dashboard;