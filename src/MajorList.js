import React from "react";
import { Link } from "react-router-dom";

const MajorList = (props) => {
  const { countrySub, countryName, toggleNav } = props;
  return (
    <div className='countrySub-List'>
      {countrySub.map((Subject) => (
        <div key={Subject.id}>
          {Subject.country === countryName && (
            <ul className='list-unstyled'>
              <Link
                onClick={toggleNav}
                className='text-decoration-none'
                to={`/major/${Subject.id}`}>
                <li>
                  {Subject.majorName} in {Subject.country}
                </li>
              </Link>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MajorList;
