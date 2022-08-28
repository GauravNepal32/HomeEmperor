import React from "react";
import NepalImg from "./images/location.png";

const LocationMap = () => {
  return (
    <>
      <h1 className='main-heading text-center'>Our Location</h1>
      <p className='info-paragraph text-center'>
        We are located in major cities of Nepal
      </p>
      <div className='nepal-map-container position-realtive text-center'>
        <img className='img-fluid' src={NepalImg} alt='Nepal New Map' />
      </div>
    </>
  );
};

export default LocationMap;
