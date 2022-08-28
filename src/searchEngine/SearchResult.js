import React from "react";
import { useLocation, Link } from "react-router-dom";
import NoResult from "../NoResult";
import SearchBox from "./SearchBox";
import AllSearch from "./AllSearch";
import CoursesCard from "./CoursesCard";
import MasterCard from "./MasterCard";
import UniversityCard from "./UniversityCard";

const SearchResult = () => {
  const { state } = useLocation();
  return (
    <div className='main-container'>
      {(state !== null) ? (
        <>
          {state.searchType === "all" ? <>
            {(state.result.countries.length !== 0 || state.result.courses.length !== 0 || state.result.degrees.length !== 0 || state.result.universities.length !== 0) ? <>
              <>
                <AllSearch result={state.result} />
              </>
            </> : <>
              <NoResult keyword={state.keyword} />
            </>}
          </> : <>
          </>}
          {state.searchType === "courses" ?
            <>
              {console.log(state.keyword)}
              <CoursesCard courses={state.result} keyword={"empty"} />
            </> : <></>
          }
          {state.searchType === "degree" ?
            <>
              <MasterCard master={state.result} />
            </> : <></>
          }
          {state.searchType === "uni" ?
            <>
              <UniversityCard university={state.result} />
            </> : <></>
          }
        </>

      ) : <NoResult keyword={""} />}
    </div>
  );
};

export default SearchResult;
