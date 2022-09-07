import React,{useState,useEffect} from 'react'
import axios from 'axios'

const CheckLike = (checkID) => {

    const uniGetURL = "https://heuristic-wescoff.128-199-28-111.plesk.page/panel/api/get-universities"
    const [likeUni,setLikeUni]=useState([])
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const [found,setFound]=useState(false)

// Getting all the liked university from API
    const loadLikeUni=async()=>{
      try{
        const response=await axios.get(uniGetURL,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${userData.token}`}})
        response.data.data.map((uni)=>{
            if(Number(uni.university_id)===Number(checkID)){
                setLikeUni(uni)
            }
        })
      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
        loadLikeUni()
    },[])
    useEffect(()=>{
        if(likeUni.length!==0){
            setFound(true)
        }else{
            setFound(false)
        }
    },[likeUni])

return found
}



export default CheckLike