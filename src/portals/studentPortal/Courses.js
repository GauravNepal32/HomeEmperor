import courseImg from "../../images/coursesThumbnail/satThumbnail.png";

const Courses = () => {
  return (
    <div className='main-container px-5 p-4 container-fluid'>
      <h1>Saved</h1>
      <div className='courses-card-container mt-5'>
        <div className='course-card'>
          <div className='card'>
            <div className='card-thumbnail'>
              <img className='img-fluid' src={courseImg} alt='' />
              <div className='course-completion-time px-2'>1 hrs</div>
            </div>
            <div className='card-body'>
              <div className='course-card-heading'>
                <h5>SAT Preparation Course</h5>
              </div>
              <div className='course-card-creator'>
                <p>John Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
