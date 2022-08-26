import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import CoursesCard from './CoursesCard'
import MasterCard from './MasterCard';
import UniversityCard from './UniversityCard';
const AllSearch = (result) => {
    const [countries,setCountries]=useState([]);
    const [courses,setCourses]=useState([]);
    const [degree,setDegree]=useState([]);
    const [universities,setUniversities]=useState([]);
    const [renderCard,setRenderCard]=useState('')
    useEffect(()=>{
        if(result.result.courses.length>0){
            setCourses(result.result.courses)
            setRenderCard('courses')
        }else if(result.result.universities.length>0){
            setUniversities(result.result.universities)
            setRenderCard('universities')
        }else if(result.result.degrees.length>0){
            setDegree(result.result.degrees)
            setRenderCard('degrees')
        }else if(result.result.countries.length>0){
            setCountries(result.result.countries)
            setRenderCard('countries')
        }
    },[])
  return (
    <div>
        {renderCard==='courses'&& <CoursesCard courses={courses}/> }
        {renderCard==='universities' && <UniversityCard university={universities}/> }
        {renderCard==='degrees' && <MasterCard master={degree}/>}
        {renderCard==='countries' && <CountryCard country={countries}/>}
    </div>
  )
}

export default AllSearch