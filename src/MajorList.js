import React from "react";
import { Link } from "react-router-dom";

const MajorList = (props) => {
  const { majorList, countryName, toggleNav } = props;
  return (
    <div className='majorList-List'>
      {/* Running loop to display all the major list */}
      {majorList.map((Subject) => (
        <div key={Subject.id}>
          <ul className='list-unstyled'>
            <Link
              onClick={toggleNav}
              className='text-decoration-none'
              to={`/major/${Subject.id}`}>
              <li>
                {Subject.title} in {countryName}
              </li>
            </Link>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MajorList;
