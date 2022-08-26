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


    const showsuccessToastMessage = () => {
        toast.success('Course removed!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const loadData = async () => {
        try {
            const response = await axios.get(courseGetURL,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userData.token}`
                    }
                }
            )
            setAllCourses(response.data.data);
            console.log(response.data.data)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadData();
    }, [])


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
                showsuccessToastMessage();
                loadData();
            }
        } catch (err) {
            console.log(err)
        }
    }
    const checkLike = () => {

    }

    return (
        <div>
            {allCourses !== null ? <>
                <div className='course-card-wrapper mt-3 mb-5 d-flex'>
                    <ToastContainer />
                    {allCourses.map((course) => (
                        <div className='course-card'>
                            {console.log(course.course)}
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