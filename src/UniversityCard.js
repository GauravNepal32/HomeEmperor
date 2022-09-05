import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth";

const UniversityCard = (university) => {
    const [fav,setFav]=useState();
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const auth=useAuth();
    const uniPostURL=`${auth.baseURL}/api/add-university`
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
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    }


    const handleFav = (UniID) => {
        if (userData=== null) {
            navigate('/login')
        } else {
                 addUniv(UniID);
            }
    }
    return (
        <>
            {
                university.university.map((uni) => (
                    <div class='col' key={uni.id} >
                        <div class='search-result-card card p-2'>
                            <div className="d-flex justify-content-end">
                                <button onClick={()=>{handleFav(uni.id)}} className="btn favourite-btn">
                                    <span id="favourite-icon" class="material-symbols-outlined favourite-icon text-danger text-end">
                                        favorite
                                    </span>
                                </button>

                            </div>

                            <img
                                src={uni.image}
                                class='card-img-top'
                                alt='...'
                            />
                            <div class='card-body'>
                                <h5 class='card-title d-flex justify-content-between'>
                                    <p class='college-name'>{uni.name}</p>
                                </h5>
                                <p class='card-text'>
                                    {uni.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default UniversityCard;