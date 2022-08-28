import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import StudentProfileUpdate from "./StudentProfileUpdate";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentUpdatePass from "./StudentUpdatePass";
import Loading from "../../Loading";
import { Helmet } from "react-helmet";


const Setting = () => {
    const userToken = JSON.parse(sessionStorage.getItem('token')).token;
    const [userDetails, setUserDetails] = useState();
    const [renderApp, setRenderApp] = useState(false)
    const auth = useAuth();
    const [errMessage, setErrMsg] = useState({});
    const profileURL = `${auth.baseURL}/api/profile`
    const updateProfileURL = `${auth.baseURL}/api/edit-profile`


    const showErrorMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

// Update User profile
    const updateProfile = async (editedname, editedPhone) => {
        try {
            const response =
                await axios.post(updateProfileURL, {
                    name: editedname,
                    phone: editedPhone
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userToken}`
                    }
                })
            if (response.data.statusCode == 200) {
                showSuccessMessage(response.data.message)
            }
        } catch (err) {
            showErrorMessage("Couldnot Update!")
        }

    }

// Success toast message
    const showToastMessage = () => {
        toast.success("Password Changed Successfully !", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };
    // Error toast message
    const showErrorToastMessage = () => {
        toast.error("Unable to change password !", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };
// Success toast message

    const showSuccessMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

// Getting user details from API
    useEffect(() => {
        axios.get(profileURL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`
            }
        }).then(response => {
            setUserDetails(response.data.data)
            setRenderApp(true)
        }).catch(err => {
            console.log(err)
            setRenderApp(true)
        })
    }, [userDetails])
    // Hnadle Sumbit for changing profile
    const handleSubmit = (e) => {
        e.preventDefault();
        var editedname = document.getElementById('name').value;
        var editedPhone = document.getElementById('phone').value;
        if (editedname === "") {
            setErrMsg("")
        } else if (editedPhone === " ") {
            showErrorMessage("Phone Field Cannot be empty!")
        } else {
            updateProfile(editedname, editedPhone);
        }
    }


    return (
        <>
        {/* Checking if API is resloved */}
            {renderApp ? (
                <>
                    <div className='main-contianer container my-5 px-md-5'>
                        <ToastContainer />
                        <Helmet>
                            <title>
                                {/* Setting page Heading */}
                                Setting | Emperor Education Network
                            </title>
                        </Helmet>

                        <div className='row justify-content-between'>
                            <div className='logout-container text-end mb-3'>
                            </div>
                            <div className='col-md-7 perosnal-info-wrapper p-3 col-12'>
                                <h3>Personal Information</h3>

                                <StudentProfileUpdate userDetails={userDetails} handleSubmit={handleSubmit} />

                            </div>
                            <div className=' col-md-4 col-12 my-md-0 my-5 change-pass-container p-3'>
                                <StudentUpdatePass userToken={userToken} showErrorToastMessage={showErrorToastMessage} showToastMessage={showToastMessage} />
                            </div>
                        </div>
                    </div>
                </>

            ):(
                <Loading/>
            )}

        </>
    );
}

export default Setting;