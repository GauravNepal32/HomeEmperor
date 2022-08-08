import React from "react";
import { Link } from "react-router-dom";

const SubjectList = (props) => {
    const { colNumber, countryCourses, countryName, toggleNav, enableScroll } =
      props;
    const startsWithLetter = (word) => /[ABCDEFGH]/i.test(word[0]);
    const startsWithLetter2 = (word) => /[IJKLMNO]/i.test(word[0]);
    const startsWithLetter3 = (word) => /[PQRSTUVWXYZ]/i.test(word[0]);

    return (
      <div
        //
        className='majorList-List1'>
        {countryCourses.map((Courses) => (
          <div className='majorList-List-item' key={Courses.id.toString()}>

            {colNumber === "1" &&
              startsWithLetter(Courses.title) &&
              Courses.country.name === countryName && (
                <ul className='list-unstyled'>
                  <Link
                    onClick={toggleNav}
                    className='text-decoration-none'
                    to={`/subject/${Courses.id.toString()}`}>
                    <li>{Courses.title}</li>
                  </Link>
                </ul>
              )}
            {colNumber === "2" &&
              startsWithLetter2(Courses.title) &&
              Courses.country.name === countryName && (
                <ul className='list-unstyled' key={Courses.id.toString()}>
                  <Link
                    onClick={toggleNav}
                    className='text-decoration-none'
                    to={`/subject/${Courses.id.toString()}`}>
                    <li>{Courses.title}</li>
                  </Link>
                </ul>
              )}
            {colNumber === "3" &&
              startsWithLetter3(Courses.title) &&
              Courses.country.name === countryName && (
                <ul className='list-unstyled' key={Courses.id.toString()}>
                  <Link
                    onClick={toggleNav}
                    className='text-decoration-none'
                    to={`/subject/${Courses.id.toString()}`}>
                    <li>{Courses.title}</li>
                  </Link>
                </ul>
              )}
          </div>
        ))}
      </div>
    );
};

export default SubjectList;
