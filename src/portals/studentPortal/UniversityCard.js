import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UniversityCard = (university) => {
    const [fav,setFav]=useState();
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const uniPostURL="https://heuristic-wescoff.128-199-28-111.plesk.page/api/add-university"

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
                    <div class='col' key={uni.university_id} >
                        {console.log(uni.university)}
                        <div class='search-result-card card p-2'>
                            <div className="d-flex justify-content-end">
                                <button onClick={()=>{handleFav(uni.university_id)}} className="btn favourite-btn">
                                    <span id="favourite-icon" class="material-symbols-outlined favourite-icon text-danger text-end">
                                        favorite
                                    </span>
                                </button>

                            </div>

                            <img
                                src={uni}
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
        </>
    );
}

export default UniversityCard;