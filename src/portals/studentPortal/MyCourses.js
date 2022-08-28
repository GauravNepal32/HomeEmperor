import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import courseImg from "../../images/coursesThumbnail/satThumbnail.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCourses = () => {
    const courseGetURL = "https://elscript.co/github/emperor-backend/api/get-courses"
    const courseRemoveURL = "https://elscript.co/github/emperor-backend/api/remove-course"
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const [allCourses, setAllCourses] = useState([]);

    // Success toast function
    const showsuccessToastMessage = () => {
        toast.success('Course removed!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

// Getting all liked courses by the user
    const loadData = async () => {
        try {
            // Calling get API
            const response = await axios.get(courseGetURL,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userData.token}`
                    }
                }
            )
            // Setting response from the api
            setAllCourses(response.data.data);
        } catch (err) {
            console.log(err)
        }
    }

    // Calling load data fucntion on first render
    useEffect(() => {
        loadData();
    }, [])


// Removing courses from suer favourite list
    const handleFav = async (course_id) => {
        try {
            const response = await axios.post(courseRemoveURL, { course_id }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userData.token}`
                }
            })
            console.log(response.data)
            if (Number(response.data.statusCode) === 200) {
                // Show success message if success response from the server
                showsuccessToastMessage();
                loadData();
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            {allCourses !== null ? <>
                <div className='course-card-wrapper mt-3 mb-5 d-flex'>
                    <ToastContainer />
                    {allCourses.map((course) => (
                        <div className='course-card'>
                            <div className='card'>
                                <div className='card-thumbnail'>
                                    <img className='img-fluid' src={courseImg} alt='' />
                                </div>
                                <div className='card-body d-flex'>
                                    <div className='course-card-heading d-flex'>
                                        <h5>{course.course.title}</h5>
                                        <button onClick={() => { handleFav(course.course.id) }} className="btn favourite-btn">
                                            <span id="favourite-icon" className="material-symbols-outlined text-end favourite-icon text-danger addedItem">
                                                favorite
                                            </span>
                                        </button>
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

export default MyCourses