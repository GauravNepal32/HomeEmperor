import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TestChild = () => {
  const { id } = useParams();
  const {
    data: test,
    error,
    isPending,
  } = useFetch(" http://192.168.1.69:8000/Test/" + id);
  return (
    <div className='main-container my-5'>
      <div className='container px-sm-5'>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {test && (
          <div>
            <div class='test-landing-container mt-5 mb-200'>
              <div class='container'>
                <div class='row row-cols-md-2 row-cols-1'>
                  <div class='col d-md-block d-none test-landing-image order-1'>
                    <img
                      src={test.landingImage}
                      class='img-fluid'
                      alt=''
                      srcset=''
                    />
                    <img
                      class='waves-image'
                      src='../images/test/wave.svg'
                      alt=''
                    />
                  </div>
                  <div class='col test-landing-text order-0'>
                    <div class='h-100 d-flex flex-column justify-content-center align-content-center'>
                      <h1 class=' test-main-heading'>
                        {test.examName} <br /> Preparation
                      </h1>
                      <div class='d-md-none d-block test-landing-image'>
                        <img
                          src='../images/test/10 SCENE.svg'
                          class='img-fluid'
                          alt=''
                          srcset=''
                        />
                        <img
                          class='waves-image'
                          src='../images/test/wave.svg'
                          alt=''
                        />
                      </div>
                      <p class='info-paragraph landing-text-paragraph pb-5 mt-5'>
                        {test.examText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='sat-exam-type p-3 mb-5'>
              <div class='sat-exam-sub-container d-flex flex-wrap justify-content-evenly'>
                <div class='sat-exam-child'>
                  <div class='sat-child-image-container'>
                    <img
                      class='img-fluid'
                      src='../images/sat/undraw_Reading_re_29f8.png'
                      alt=''
                    />
                  </div>
                  <div class='sat-child-heading-container text-center mt-3'>
                    <div class='sub-heading'>Reading</div>
                  </div>
                  <div class='sat-child-time-container mt-3 d-flex align-items-center justify-content-center'>
                    <span class='material-symbols-outlined me-3'>schedule</span>
                    65 minutes
                  </div>
                  <div class='sat-child-score-container'></div>
                </div>
                <div class='sat-exam-child'>
                  <div class='sat-child-image-container'>
                    <img
                      class='img-fluid'
                      src='../images/sat/writing.svg'
                      alt=''
                    />
                  </div>
                  <div class='sat-child-heading-container text-center mt-3'>
                    <div class='sub-heading'>Writing</div>
                  </div>
                  <div class='sat-child-time-container mt-3 d-flex align-items-center justify-content-center'>
                    <span class='material-symbols-outlined me-3'>schedule</span>
                    55 minutes
                  </div>
                  <div class='sat-child-score-container'></div>
                </div>
                <div class='sat-exam-child'>
                  <div class='sat-child-image-container'>
                    <img
                      class='img-fluid'
                      src='../images/sat/undraw_Exams_re_4ios.png'
                      alt=''
                    />
                  </div>
                  <div class='sat-child-heading-container text-center mt-3'>
                    <div class='sub-heading'>Math (No Calculator)</div>
                  </div>
                  <div class='sat-child-time-container mt-3 d-flex align-items-center justify-content-center'>
                    <span class='material-symbols-outlined me-3'>schedule</span>
                    25 minutes
                  </div>
                  <div class='sat-child-score-container'></div>
                </div>
                <div class='sat-exam-child'>
                  <div class='sat-child-image-container'>
                    <img
                      class='img-fluid'
                      src='../images/sat/undraw_mathematics_4otb.png'
                      alt=''
                    />
                  </div>
                  <div class='sat-child-heading-container text-center mt-3'>
                    <div class='sub-heading'>Math</div>
                  </div>
                  <div class='sat-child-time-container mt-3 d-flex align-items-center justify-content-center'>
                    <span class='material-symbols-outlined me-3'>schedule</span>
                    55 minutes
                  </div>
                  <div class='sat-child-score-container'></div>
                </div>
              </div>
              <p class='mt-5 fw-bold text-center'>
                Total Time : {test.totalTime}
              </p>
            </div>
            <div class='get-more-details-container mb-5 text-center'>
              <Link to='/contact' class='btn btn-type-1'>
                Get More Details
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestChild;
