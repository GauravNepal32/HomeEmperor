import React from "react";
import { Link } from "react-router-dom";

const Country = (countryList) => {
    return (
        <div className='row row-cols-md-4 row-cols-sm-2 row-cols-1 g-2 '>
            {countryList.countryList.map((country) => (
                <div className='col' key={country.id}>
                    <div className='card country-card'>
                        <img
                            className='card-img'
                            src={JSON.stringify(country.image)}
                            alt={country.alt}
                        />
                        <div className='con-text'>
                            <h2>{country.name}</h2>
                            <p>
                                {country.text}
                                <button className='btn btn-type-1'>
                                    <Link className='text-decoration-none' to={country.URL}>
                                        See More <i className='bi bi-arrow-right ms-2'></i>
                                    </Link>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Country;
