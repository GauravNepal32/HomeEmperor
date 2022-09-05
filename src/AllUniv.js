import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import UniversityCard from "./UniversityCard";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
const AllUniv = () => {
    const [university, setUniversity] = useState({});
    const auth=useAuth();
    const uniURL = `${auth.baseURL}/api/universities`
    const [loading, setLoading] = useState(true)
  const navigate=useNavigate();

    // Fetching data from API
    useEffect(() => {
        axios.get(uniURL).then((response) => {
            // Setting result from the API
            setUniversity(response.data.data)
            setLoading(false)
        }).catch((err)=>{
            navigate('/error')
            console.log(err)
        })
    }, []);
    return (
        <div className="main-container">
            {/* Wating for API request to resolve */}
            {loading ? <Loading /> : <div className="container my-5 px-5">
                <h1>All University</h1>
                <div class='search-card-container d-flex justify-content-md-start justify-content-center mt-5'>
                    <div class='row d-flex justify-content-center'>
                        {
                            <UniversityCard university={university} />
                        }

                    </div>
                </div>

            </div>}

        </div >
    );
}

export default AllUniv;