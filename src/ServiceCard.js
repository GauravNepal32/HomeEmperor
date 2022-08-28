import React from "react";

const ServiceCard = (props) => {
  const cardID = props.cardNum;
  return (
    // check if card is even or not for color selection
    <div className={cardID % 2 === 0 ? "service-odd col" : "service-even col"}>
      <div className='service-card p-2'>
        <div className='card-body'>
          <h5 className='card-title d-flex justify-content-between'>
            <span className='fw-light text-uppercase'>{props.cardTitle}</span>
            <span className='material-symbols-outlined'>{props.iconURL}</span>
          </h5>
          <div className='service-card-text mt-4'>
            <p className='text-justify'>{props.cardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
