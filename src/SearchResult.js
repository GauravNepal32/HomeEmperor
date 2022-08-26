import React from "react";
import { useLocation,Link } from "react-router-dom";
import NoResult from "./NoResult";
import SearchBox from "./SearchBox";
import AllSearch from "./searchEngine/AllSearch";

const SearchResult = () => {
  const {state} = useLocation();
  return (
    <div className='main-container'>
      <SearchBox />
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
              {state.result.search_results.length !== 0 ? (
                <div className='row mt-5 px-md-5'>
        <div className='search-result-info-container ms-3'>
                    {/* Displaying Number of result found */}
          <h5 className='sub-heading'>{state.result.search_results.length} result found</h5>
        </div>
        <div className='search-card-container d-flex justify-content-sm-start justify-content-center px-0 mt-5'>
          <div className='row d-flex justify-content-center'>
                      {/* Running loops on search result to display in cards */}
            {state.result.search_results.map((found)=>(
              <div className='col' key={found.id}>
                <div className='search-result-card card'>
                  <img
                    src={found.image}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title d-flex justify-content-between'>
                      <p className='college-name'>{state.category==="title"?found.title:found.name}</p>
                    </h5>
                    <p className='card-text'>
                    {found.description}
                    </p>
                    {/* Redirect to dedicated links */}
                    <Link to='/HomeEmperor' className='btn btn-type-1 p-2'>
                      View Details
                    </Link>
                  </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  ):<NoResult keyword={state.keyword}/>}
          </>}
  </>

      ) : <NoResult keyword={""} />}
    </div>
  );
};

export default SearchResult;
