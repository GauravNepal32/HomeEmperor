import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../src/images/error/lost.svg";

const Lost = () => {
  return (
    <div className='container'>
      <div className='row row-cols-md-2 row-cols-1 d-flex'>
        <div className='col'>
          <div className='lost-image-container'>
            <img className='img-fluid' alt='Lost' src={ErrorImage} />
          </div>
        </div>
        <div className='col'>
          <div className='lost-text-container py-5'>
            <h1 className='lost-heading text-center'>404</h1>
            <h5 className='text-center'>Looks like you are lost!!</h5>
            <div className='text-center'>
              {/* Redirect to Home page  */}
              <Link
                className='text-decoration-none text-center text-black'
                to='/HomeEmperor'>
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lost;
