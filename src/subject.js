import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CallBack from "./CallBack";
import ListWithIcons from "./ListWithLIcons";
import TableBodyData from "./TableBodyData";
import TableData from "./TableBodyData";
import useFetch from "./useFetch";

const Subject = () => {
  const { id } = useParams();
  const {
    data: Courses,
    error,
    isPending,
  } = useFetch("http://192.168.1.69:8000/subject/" + id);

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

              <p className='subject-paragraph mb-5'>{Courses.text1}</p>

              {/* <ul className='list-unstyled subject-info-list my-4'>
                <li>
                  {Courses.HighLights.map((HighLight) => (
                    <ListWithIcons HighLight={HighLight} />
                  ))}
                </li>
              </ul> */}
              <div className='subject-image-container'>
                <img
                  className='img-fluid'
                  src={Courses.subjectImage}
                  alt={Courses.subjectImageAlt}
                />
              </div>
              {/* <p className='subject-sub-heading mt-5'>
                {Courses.subjectName} in {Courses.country}
              </p> */}
              <div className='subject-about-container'>
                <p className='subject-paragraph text-justify mb-5'>
                  {Courses.text1}
                </p>

                <p className='subject-paragraph mb-5'>{Courses.text2}</p>
              </div>

              {/* <div className='university-course-info-container'>
                <p className='subject-sub-heading'>
                  University with MBA in {Courses.subjectName}
                </p>
                <table className='table table-bordered mt-4 expand-table university-course-table'>
                  <thead>
                    <tr>
                      <th scope='col'>{Courses.Table1[0].ColHeading1}</th>
                      <th scope='col fw-bold'>
                        {Courses.Table1[0].ColHeading2}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Courses.Table1[1].tableData.map((tableData) => (
                      <TableBodyData varTableData={tableData} />
                    ))}
                  </tbody>
                </table>
              </div> */}
            </div>
            <CallBack />
          </div>
        )}
      </div>
    </div>
  );
};

export default Subject;
