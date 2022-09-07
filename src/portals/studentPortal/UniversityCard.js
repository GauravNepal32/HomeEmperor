import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UniversityCard = () => {
    const uniGetURL = "https://heuristic-wescoff.128-199-28-111.plesk.page/panel/api/get-universities"
    const uniRemoveURL = "https://heuristic-wescoff.128-199-28-111.plesk.page/panel/api/remove-university"
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const [allUniversity, setAllUniversity] = useState([]);


    const showsuccessToastMessage = () => {
        toast.success('University removed!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    const showerrorToastMessage = () => {
        toast.error('Unable to removed university!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const loadData = async () => {
        try {
            const response = await axios.get(uniGetURL,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userData.token}`
                    }
                }
            )
            setAllUniversity(response.data.data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadData();
    }, [])


    const handleFav = async (uni_id) => {
        try {
            const response = await axios.post(uniRemoveURL, { university_id: uni_id }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userData.token}`
                }
            })
            console.log(response)
            if (Number(response.data.statusCode) === 200) {
                showsuccessToastMessage();
                loadData();
            } else {
                showerrorToastMessage();
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {allUniversity !== null ? <>
                <div className='course-card-wrapper mt-3 mb-5 d-flex'>
                    <ToastContainer />
                    {allUniversity.map((uni) => (
                        <div className='course-card'>
                            <div className='card'>
                                <div className='card-thumbnail'>
                                    <img className='img-fluid' src={uni.university.image} alt='' />
                                </div>
                                <div className='card-body d-flex'>
                                    <div className='course-card-heading d-flex'>
                                        <h5>{uni.university.name}</h5>
                                        <button onClick={() => { handleFav(uni.university_id) }} className="btn favourite-btn">
                                            <span id="favourite-icon" className="material-symbols-outlined text-end favourite-icon text-danger addedItem">
                                                favorite
                                            </span>
                                        </button>
                                    </div>
                                    <div className="course-card-text">
                                        <p>{uni.university.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </> : <>No Courses</>}

        </div>
    )
}

export default UniversityCard