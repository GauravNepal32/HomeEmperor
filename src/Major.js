import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CallBack from "./CallBack";
import useFetch from "./useFetch";
import axios from "axios";

const Major = () => {
  const { id } = useParams();
  const [major, setMajor] = useState();
  useEffect(() => {
    axios
      .get("https://elscript.co/github/emperor-backend/api/degrees")
      .then((response) => {
        // if(id== response.data.data.id)
        setMajor(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // useEffect(()=>{
  //     if (major.)
  // })

  return (
    <div className='main-container my-5'>
      <div className='container px-sm-5'>
        {console.log(major)}
        {major && (
          <div className='row justify-content-between'>
            <div className='col-md-8 col-12'>
              <div className='d-flex'>
                <div className='color-container'></div>
                <div className='major-content-holder pt-5 pb-3'>
                  <nav className='text-white' aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a
                          className='text-decoration-none text-black'
                          href='../index.html'>
                          Home
                        </a>
                      </li>
                      <li
                        className='breadcrumb-item text-black'
                        aria-current='page'>
                        {/* {major.country} */}
                      </li>
                      <li
                        className='breadcrumb-item text-grey'
                        aria-current='page'>
                        {major.title}
                      </li>
                    </ol>
                  </nav>
                  <div>
                    <h1 className='main-heading'>
                      {major.title} in {major.title}
                    </h1>
                    {/* <h3 className='major-sub-heading mt-4'>
                                            Highlights of {Subject.majorName} in {Subject.country}
                                        </h3>

                                        <ul className='uList mt-3'>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: Subject["HighLights"],
                                                }}></div>
                                        </ul> */}
                  </div>
                </div>
              </div>
              <div className='mt-4 ps-md-4'>
                <h3 className='major-sub-heading my-4'>
                  Why study in {major.title}?
                </h3>
                <p className='subject-paragraph'>{major.description}</p>
                <div className='mt-4 subject-image-container'>
                  <img
                    className='img-fluid'
                    src='../images/subject/masters-in-accounting-usa.jpeg'
                    alt=''
                  />
                </div>
                <p className='img-caption text-center mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  cupiditate?
                </p>
                <div className='success-rate mt-5'>
                  <img
                    className='img-fluid'
                    src='../images/success.png'
                    alt=''
                  />
                </div>
                <div className='major-description-container'></div>
              </div>
            </div>
            <CallBack />
          </div>
        )}
      </div>
    </div>
  );
};

export default Major;
