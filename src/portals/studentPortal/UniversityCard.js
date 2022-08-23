import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UniversityCard = (university) => {
    const [fav,setFav]=useState();
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const uniPostURL="https://elscript.co/github/emperor-backend/api/add-university"
    const getUniURL="https://elscript.co/github/emperor-backend/api/get-universities"
    const [uniInfo,setUniInfo]=useState({});
    const [renderApp,setRenderApp]=useState(false)

    const addUniv=async(UniID)=>{
         try {
            const response =
                await axios.post(uniPostURL, {
                   university_id:UniID
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userData.token}`
                    }
                })
                if (response.data.statusCode===200){
                    document.getElementById('favourite-icon').classList.add('addedItem')
                }

        } catch (err) {
            console.log(err);
        }
    }
    const loadData=async ()=>{
        try{
            const response=await axios.get(getUniURL,{
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    }
                })
            setUniInfo(response.data.data)
            setRenderApp(true)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        loadData();
    },[])

    const handleFav = (UniID) => {
        if (userData=== null) {
            navigate('/login')
        } else {
                 addUniv(UniID);
            }
    }

    // const checkFav=(UniID)=>{
    //     var found=false
    //     while (true){
    //         uniInfo.map((uni)=>{
    //             if(uni.university_id===UniID){
    //                 found=true
    //             } else{
    //                 found=false
    //             }
    //         })
    //     }
    // }
    // }
    return (
        <>
        {renderApp && <>
        {
                uniInfo.map((uni,index) => (
                    <div className='uni-search-card' key={index} >
                        <div className='search-result-card card p-2'>
                            <div className="d-flex justify-content-end">
                                {/* {chechFav(uni.university_id)} */}
                                <button onClick={()=>{handleFav(uni.university_id)}} className="btn favourite-btn">
                                    <span id="favourite-icon" className="material-symbols-outlined text-end favourite-icon text-danger">
                                        favorite
                                    </span>
                                </button>

                            </div>

                            <img
                                src={uni.university.image}
                                class='card-img-top'
                                alt='...'
                            />
                            <div class='card-body'>
                                <h5 class='card-title d-flex justify-content-between'>
                                    <p class='college-name'>{uni.university.name}</p>
                                </h5>
                                <p class='card-text'>
                                    {uni.university.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>}

        </>
    );
}

export default UniversityCard;