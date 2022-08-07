import React from "react";
import { useNavigate } from "react-router-dom";

const UniversityCard = (university) => {
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem("token"));
    const handleFav = () => {
        if (userData == null) {
            navigate('/login')
        } else {

            if (document.getElementById('favourite-icon').classList.contains('addedItem')) {
                document.getElementById('favourite-icon').classList.remove('addedItem')
            } else {
                document.getElementById('favourite-icon').classList.add('addedItem')

            }
        }

    }

    console.log(university)
    return (
        <>
            {
                university.university.map((uni) => (
                    <div class='col' >
                        <div class='search-result-card card p-2'>
                            <div className="d-flex justify-content-end">
                                <button onClick={handleFav} className="btn favourite-btn">
                                    <span id="favourite-icon" class="material-symbols-outlined favourite-icon text-danger text-end">
                                        favorite
                                    </span>
                                </button>

                            </div>

                            <img
                                src={uni.image}
                                class='card-img-top'
                                alt='...'
                            />
                            <div class='card-body'>
                                <h5 class='card-title d-flex justify-content-between'>
                                    <p class='college-name'>{uni.name}</p>
                                </h5>
                                <p class='card-text'>
                                    {uni.description}
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