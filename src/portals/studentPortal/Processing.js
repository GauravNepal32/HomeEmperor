import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import ProcessingActivity from "./ProcessingActivity";
import { Helmet } from "react-helmet";


const Processing = () => {

   const userData = JSON.parse(sessionStorage.getItem("token"));
  const userToken=userData.token
  const activities = "https://heuristic-wescoff.128-199-28-111.plesk.page/panel/api/activities"
  const [activity,setActivity]=useState([]);
  const [loading,setLoading]=useState(true)
  const [activityAvailable,setActivityAvailable]=useState(false);


// Calling get API to get all activity
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

  useEffect(()=>{
  if(activity.length===0){
    setActivityAvailable(false)
  }else if(activity.length>0){
setActivityAvailable(true);
  }
})
  return (
    <div className='main-container px-md-5 p-md-4 p-2 p-0 mb-5 container'>
      <Helmet>
        <title>
          Processing | Emperor Education Network
        </title>
      </Helmet>
      {loading ? <Loading/> : <ProcessingActivity activity={activity} activityAvailable={activityAvailable}/> }


    </div>
  );
};

export default Processing;
