import React from "react";
import examStudent from "./images/test/testStudent.png";
import useFetch from "./useFetch";
import TestList from "./TestList";

const TestPrep = () => {
  const { data: test } = useFetch("http://192.168.1.64:8000/Test");

  return (
    <div class='main-container px-0'>
      <div class='mt-5 px-0'>
        <div class='test-landing-container px-0 mb-200'>
          <div class='container px-md-0 px-2'>
            <div className='container px-md-5 px-2  p-0'>
              <div class='row row-cols-md-2 row-cols-1'>
                <div class='col d-md-block d-none test-landing-image order-1'>
                  <img src={examStudent} class='img-fluid' alt='' srcset='' />
                </div>
                <div class='col test-landing-text order-0'>
                  <div class='h-100 d-flex flex-column justify-content-center align-content-center'>
                    <h1 class=' test-main-heading'>
                      Test <br /> Preparation
                    </h1>
                    <div class='d-md-none d-block test-landing-image'>
                      <img
                        src={examStudent}
                        class='img-fluid'
                        alt=''
                        srcset=''
                      />
                    </div>
                    <p class='info-paragraph landing-text-paragraph pb-5 mt-5'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident sapiente, possimus at, eius reiciendis pariatur
                      architecto quos asperiores enim dolor animi quidem sunt
                      dignissimos. Tempore nihil nisi, quas vitae qui
                      perferendis, maxime laudantium illo perspiciatis ullam
                      esse natus corrupti debitis assumenda, suscipit similique
                      voluptate obcaecati quis sint sit delectus inventore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='tests-type-container mt-5'>
          {test && <TestList test={test} />}
        </div>
      </div>
    </div>
  );
};

export default TestPrep;
