import React,{useState,useEffect} from "react";
import axios from "axios";
import profileImg from "../../images/portal/profileImg.webp";
import Loading from "../../Loading";


const ChangeProfile = () => {
  const userData = JSON.parse(sessionStorage.getItem("token"));
    const [profileDetails, setProfileDetails] = useState();
      const [editInfo, setEditInfo] = useState(true);
  const [editedName, setEditedName] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const userToken = userData.token;
  const [loading, setLoading] = useState(true);
  const [changeProfileSuccess, setChangeProfileSuccess] = useState(false);





  const getProfileURL = "https://elscript.co/github/emperor-backend/api/profile";
  const changeProfileURL =
    "https://elscript.co/github/emperor-backend/api/edit-profile";


    useEffect(() => {
    axios.get(getProfileURL,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    ).then((response) => {
      console.log(response.data.data);
      setProfileDetails(response.data.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
  }, [changeProfileSuccess])



  const submitEditProfile = (editedName,editedPhone) =>{
    console.log(editedName)
  }

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
  const submitHandle = () => {
    if (editedName === "") {
      setEditedName(profileDetails.name);
    }
    if (editedPhone === "") {
      setEditedPhone(profileDetails.phone);
    }
    console.log(editedName);
    console.log(editedPhone)
    axios.post(changeProfileURL,{
      name:editedName,
      phone:editedPhone,
    },
     {
          headers: {
            "Content-Type": "application/json",
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
                  {/* {editInfo ? (
                    <button
                      className='btn btn-type-2'
                          onClick={(e) => {
                            e.preventDefault()
                        setEditInfo(!editInfo);
                      }}>
                      Edit
                    </button>
                  ) : ( */}
                    <button
                      className='btn btn-type-2'
                            onClick={(e) => {
                              setEditedName(document.getElementById('editedName').value);
                              setEditedPhone(document.getElementById('editedPhone').value);
                              submitHandle(editedName,editedPhone);
                              setEditInfo(!editInfo);
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