import React from "react";
import { Link } from "react-router-dom";

const Country = (countryList) => {
    return (
      <div className='row row-cols-md-4 row-cols-sm-2 row-cols-1 g-2 '>
        {countryList.countryList.map((country) => (
          // Looping thorugh country list
          <div className='col' key={country.id}>
            <div className='card country-card'>
              <img className='card-img' src={country.image} alt={country.alt} />
              <div className='con-text'>
                <h2>{country.name}</h2>
                <p>{country.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Country;
