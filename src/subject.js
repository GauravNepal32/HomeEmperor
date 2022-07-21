import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CallBack from "./CallBack";
import useFetch from "./useFetch";

const Subject = () => {
  const { id } = useParams();
  const {
    data: Courses,
    error,
    isPending,
  } = useFetch("http://192.168.1.64:8000/subject/" + id);

  return (
    <div className='main-container my-5'>
      <div className='container px-md-5 px-2'>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {Courses && (
          <div className='row m-0 '>
            <div className='col-md-8 col-12'>
              <h1 className='fw-bold text-sm-start text-center'>
                {Courses.subjectName} in {Courses.country}
              </h1>
              <h2 className='mt-4 fw-light text-sm-start text-center'>
                Why study {Courses.subjectName} in {Courses.country}?
              </h2>
              <ul className='list-unstyled subject-info-list my-4'>
                <li>
                  <p className='text-paragraph'>
                    <i className='fa-solid fa-graduation-cap golden-color'></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa eligendi assumenda tenetur culpa.
                  </p>
                  <p className='text-paragraph'>
                    <i className='fa-solid fa-briefcase golden-color'></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa eligendi assumenda tenetur culpa.
                  </p>
                  <p className='text-paragraph'>
                    <i className='fa-solid fa-money-bill golden-color'></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa eligendi assumenda tenetur culpa.
                  </p>
                  <p className='text-paragraph'>
                    <i className='fa-solid fa-book-open-reader golden-color'></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa eligendi assumenda tenetur culpa.
                  </p>
                  <p className='text-paragraph'>
                    <i className='fa-solid fa-briefcase golden-color'></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa eligendi assumenda tenetur culpa.
                  </p>
                  <p className='text-paragraph'>
                    <i className='fa-solid fa-rupee-sign golden-color'></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa eligendi assumenda tenetur culpa.
                  </p>
                </li>
              </ul>
              <div className='subject-image-container'>
                <img
                  className='img-fluid'
                  src={Courses.subjectImage}
                  alt={Courses.subjectImageAlt}
                />
              </div>
              <p className='subject-sub-heading mt-5'>
                {Courses.subjectName} in {Courses.country}
              </p>
              <div className='subject-about-container'>
                <p className='subject-paragraph text-justify mb-5'>
                  {Courses.text1}
                </p>

                <p className='subject-paragraph mb-5'>{Courses.test2}</p>
              </div>

              <div className='university-course-info-container'>
                <p className='subject-sub-heading'>
                  University with MBA in Accounting
                  <table className='table table-bordered mt-4 expand-table university-course-table'>
                    <thead>
                      <tr>
                        <th scope='col'>
                          Top Universities in {Courses.countryName} for{" "}
                          {Courses.subjectName}
                        </th>
                        <th scope='col fw-bold'>Course Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td colspan='2'>
                          <button id='table-btn'>Show More</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </p>
              </div>
            </div>
            <CallBack />
          </div>
        )}
      </div>
    </div>
  );
};

export default Subject;
