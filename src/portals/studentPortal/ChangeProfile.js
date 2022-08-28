import React,{useState,useEffect} from "react";
import axios from "axios";
import profileImg from "../../images/portal/profileImg.webp";
import Loading from "../../Loading";
import { Helmet } from "react-helmet";


const ChangeProfile = () => {
  const userData = JSON.parse(sessionStorage.getItem("token"));
    const [profileDetails, setProfileDetails] = useState();
  const userToken = userData.token;
  const [loading, setLoading] = useState(true);
  const [changeProfileSuccess, setChangeProfileSuccess] = useState(false);
  const getProfileURL = "https://elscript.co/github/emperor-backend/api/profile";
  const changeProfileURL =
    "https://elscript.co/github/emperor-backend/api/edit-profile";


//  API call to get user details
    useEffect(() => {
    axios.get(getProfileURL,
      {
        headers: {
          "Content-Type": "application/json",
          // Passing token
          Authorization: `Bearer ${userToken}`,
        },
      }
    ).then((response) => {
      setProfileDetails(response.data.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
  }, [changeProfileSuccess])





  // } = async (editedName, editedPhone) => {
  //   try {
  //     console.log(editedName);
  //     const response = await axios.post(
  //       changeProfileURL,
  //       {
  //         name: editedName,
  //         phone: editedPhone,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${userToken}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Profile edited function

  const submitHandle = (a,b) => {
    if (a === "") {
      a = profileDetails.name;
    }
    if (b === "") {
      b = profileDetails.phone;
    }
    // Post API to update profile
    axios.post(changeProfileURL,{
      name:a,
      phone:b,
    },
     {
          headers: {
            "Content-Type": "application/json",
            // Passing token
            Authorization: `Bearer ${userToken}`,
          },}
    ).then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })
  };


    return (
        <>
        {
          // Checking if API is resolved
            loading ? <Loading/> : (
        <div className='profile-info-container mt-5'>
            <div className='profile-image-container'>
              <img className='img-fluid' src={profileImg} alt='' />
            </div>
              <form action="">
            <div className='text-info-container mt-2'>
              <div className='row row-cols-sm-2 row-cols-1'>
                <div className='col'>
                  <label htmlFor='firstName'>First Name</label>
                  <input
                    type='text'
                    id='editedName'
                        name="editedName"
                    className='form-control'
                  />
                </div>
                <div className='col'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input
                    type='text'
                    className='form-control'
                    id='editedPhone'
                  />
                </div>
              </div>
              <div className='row mt-3 row-cols-sm-2 row-cols-1'>
                <div className='col'>
                  <label htmlFor='lastName'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                  />
                </div>
              </div>
              <div className='row mt-3'>
                <div className='text-end'>
                    <button
                      className='btn btn-type-2'
                            onClick={(e) => {
                              var a=document.getElementById('editedName').value;
                              var b=document.getElementById('editedPhone').value
                              e.preventDefault();
                              submitHandle(a,b)
                      }}>
                      Save
                    </button>

                </div>
              </div>
            </div>
              </form>
          </div>
            )
        }

        </>
    );
}

export default ChangeProfile;