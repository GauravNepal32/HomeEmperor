import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallBack from "./CallBack";
import ListWithIcons from "./ListWithLIcons";
import TableBodyData from "./TableBodyData";
import TableData from "./TableBodyData";
import useFetch from "./useFetch";
import Loading from "./Loading"

const Subject = () => {
  const {id}  = useParams();
  const [allSubject,setAllSubject]=useState();
  const [renderApp,setRenderApp]=useState(false);
useEffect(()=>{
  axios.get("https://elscript.co/github/emperor-backend/api/courses").then((response)=>{
    response.data.data.map((subject)=>{
      if(subject.id.toString() === id.toString() ){
        setAllSubject(subject)
        setRenderApp(true);
      }else{
      }
    })
  })
},[id])


  return (
    <div className='main-container my-5'>
      {!renderApp ? <Loading/> : (
         <div className='container px-md-5 px-2'>
        {allSubject && (
          <div className='row m-0 '>
            <div className='col-md-8 col-12'>
              <h1 className='fw-bold text-sm-start text-center'>
                {allSubject.title} in
                {/* {allSubject.country.name} */}
              </h1>
              <h2 className='mt-4 fw-light text-sm-start text-center'>
                Why study {allSubject.title} in
                {/* {allSubject.country.name}? */}
              </h2>

              <p className='subject-paragraph mb-5'>{allSubject.description}</p>

              {/* <ul className='list-unstyled subject-info-list my-4'>
                <li>
                  {Courses.HighLights.map((HighLight) => (
                    <ListWithIcons HighLight={HighLight} />
                  ))}
                </li>
              </ul> */}
              <div className='subject-image-container'>
                {/* <img
                  className='img-fluid'
                  src={Courses.subjectImage}
                  alt={Courses.subjectImageAlt}
                /> */}
              </div>
              {/* <p className='subject-sub-heading mt-5'>
                {Courses.subjectName} in {Courses.country}
              </p> */}
              {/* <div className='subject-about-container'>
                <p className='subject-paragraph text-justify mb-5'>
                  {Courses.text1}
                </p>

                <p className='subject-paragraph mb-5'>{Courses.text2}</p>
              </div> */}

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
      ) }

    </div>
  );
};

export default Subject;
