import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CheckLike from './CheckLike'
const UniversityCard = (university) => {
  const ref=React.createRef();
  const navigate = useNavigate();
  const coursePostURL = "https://elscript.co/github/emperor-backend/api/add-university"
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const [liked,setLiked]=useState(true);


  const addUniversity = async (universityID,e) => {
    try {
      const response =
        await axios.post(coursePostURL, {
          university_id: universityID
        }, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`
          }
        })
      if (response.data.statusCode === 200) {
document.getElementById(`favourite-icon${universityID}`).classList.add('addedItem')
      }

    } catch (err) {
      console.log(err);
    }
  }
  const handleFav = (universityID) => {
    if (userData === null) {
      navigate('/login')
    } else {
      addUniversity(universityID);
    }
  }




  return (
    <div>
         <div className='row mt-5 px-md-5'>
        <div className='search-result-info-container ms-3'>
                    {/* Displaying Number of result found */}
          <h5 className='sub-heading'>{university.university.length} result found</h5>
        </div>
        <div className='search-card-container d-flex justify-content-sm-start justify-content-center px-0 mt-5'>
          <div className='row d-flex justify-content-center'>
                      {/* Running loops on search result to display in cards */}
            {university.university.map((found)=>(
              <div className='col' key={found.id}>
                <div className='search-result-card card'>
                  <img
                    src={found.image}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title d-flex justify-content-between'>
                      <p className='college-name'>{found.name}</p>
                       <div className="courses-react-container">
                    <div className="d-flex justify-content-end">
                      {/* {chechFav(uni.university_id)} */}
                      <button onClick={() => { handleFav(found.id) }} className="btn favourite-btn">
                        {/* <span id="favourite-icon" className="material-symbols-outlined text-end favourite-icon text-danger">
                          favorite
                        </span> */}
                        <span ref={ref}  id={`favourite-icon${found.id}`} className={(!CheckLike(found.id) || !liked) ? "material-symbols-outlined text-end favourite-icon text-danger" : "material-symbols-outlined text-end favourite-icon text-danger addedItem"}>
                          favorite
                        </span>
                      </button>

                    </div>
                  </div>
                    </h5>
                    <p className='card-text'>
                    {found.description}
                    </p>
                  </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default UniversityCard