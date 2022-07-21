import React from "react";

const Testimonials = (props) => {
    return (
      <div
        className={
          props.cardNum % 2 === 1
            ? "col service-even p-3"
            : "col service-odd p-3"
        }>
        <div className='container d-flex flex-column justify-content-evenly'>
          <div className='d-flex justify-content-center align-content-center py-3'>
            <div className='client-img-container'>
              <img
                src={props.clientImg}
                alt={props.clientName}
                className='client-img img-fluid'
              />
            </div>
          </div>
          <div className='client-text'>
            <p>{props.clientText}</p>
          </div>
          <div className='client-info h-100 mt-auto'>
            <h4 className='client-name text-center'>{props.clientName}</h4>
            <h6 className='text-center'>{props.clientDestination}</h6>
          </div>
        </div>
      </div>
    );
}

export default Testimonials;