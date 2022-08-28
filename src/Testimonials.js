import React from "react";

const Testimonials = (testimonials) => {
  return (
    <div className="row mt-5 row-cols-lg-3 row-col-md-2 row-cols-sm-2 row-cols-1 g-2">
      {/* Running loop for all the testimonials available  */}
      {testimonials.testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className={
            // Checking testimonal id for setting respective color
            testimonial.id % 2 === 1
              ? "col service-even p-3"
              : "col service-odd p-3"
          } >
          <div className='container d-flex flex-column justify-content-evenly'>
            <div className='d-flex justify-content-center align-content-center py-3'>
              <div className='client-img-container'>
                <img
                  src={testimonial.image}
                  alt='Failed to load image'
                  className='client-img img-fluid'
                />
              </div>
            </div>
            <div className='client-text'>
              <p className="text-center">{testimonial.description}</p>
            </div>
            <div className='client-info h-100 mt-auto'>
              <h4 className='client-name text-center'>{testimonial.name}</h4>
            </div>
          </div>
        </div>
      ))
      }
    </div>



  );
};

export default Testimonials;