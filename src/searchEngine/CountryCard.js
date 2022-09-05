import React from 'react'
import { Link } from 'react-router-dom'
const CountryCard = (country) => {
  return (
    <div className='container'>
      <div className='row px-5 mt-5'>
        <div className='search-result-info-container'>
                    {/* Displaying Number of result found */}
          <h5 className='sub-heading'>{country.country.length} result found</h5>
        </div>
        <div className='search-card-container d-flex justify-content-sm-start justify-content-center px-0 mt-5'>
          <div className='row d-flex justify-content-center'>
                      {/* Running loops on search result to display in cards */}
            {country.country.map((found)=>(
              <div className='col' key={found.id}>
               {console.log(found)}
                <div className='search-result-card card'>
                  <img
                    src={found.image}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title d-flex justify-content-between'>
                      <p className='college-name'>{found.name}</p>
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

export default CountryCard