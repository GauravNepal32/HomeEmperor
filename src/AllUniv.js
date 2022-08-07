import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import UniversityCard from "./UniversityCard";

const AllUniv = () => {
    const [university, setUniversity] = useState({});
    const uniURL = "https://elscript.co/github/emperor-backend/api/universities"
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(uniURL).then((response) => {
            console.log(response.data.data)
            setUniversity(response.data.data)
            setLoading(false)
        })
    }, []);
    return (
        <div className="main-container">
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