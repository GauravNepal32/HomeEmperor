import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../Loading";


const Processing = () => {

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
    <div className='main-container px-md-5 p-md-4 p-2 p-0 mb-5 container'>
      {loading ? <Loading/> : (

        <>
        <div className='processing-status-details mb-5 p-3'>
        <div className='process-heading d-flex justify-content-between align-items-center'></div>
        <div className='processing-status-container'>
          <div className='process-heading'>#1 Visa Processing</div>
          <div className='latest-upadte-container'>
            Latest Update: {activity.at(0).title}
          </div>
          <div className='processing-timeline-container mt-4'>
            <div className='d-flex'>
              <div className='d-flex flex-column'>
                {activity.map((activities) => (
                    <div className='processing-timline-child d-flex align-items-center'>
                        <div className='date-container'>{(activities.created_at).substring(0, 10)}</div>
                        <div className='timeline-checkpoint mx-4'></div>
                        <div className='straight-line-container'></div>
                        <div className='timeline-description '>
                            <div className="fw-bold"> {activities.title}
                            <a target="_blank" href={activities.image} className="ms-2 text-black fw-normal">View File</a></div>


                            <div className='timeline-description2'>
                                {activities.description}
                            </div>
                        </div>

                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
      )}

    </div>
  );
};

export default Processing;
