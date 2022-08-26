import React from 'react'
import { Link } from 'react-router-dom'
const CoursesCard = (courses) => {
  return (
    <div>
         <div className='row mt-5 px-md-5'>
        <div className='search-result-info-container ms-3'>
                    {/* Displaying Number of result found */}
          <h5 className='sub-heading'>{courses.courses.length} result found</h5>
        </div>
        <div className='search-card-container d-flex justify-content-sm-start justify-content-center px-0 mt-5'>
          <div className='row d-flex justify-content-center'>
                      {/* Running loops on search result to display in cards */}
            {courses.courses.map((found)=>(
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
                      <p className='college-name'>{found.title}</p>
                    </h5>
                    <p className='card-text'>
                    {found.description}
                    </p>
                    {/* Redirect to dedicated links */}
                    <Link to={`/subject/${found.id}`} className='btn btn-type-1 p-2'>
                      View Details
                    </Link>
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

export default CoursesCard