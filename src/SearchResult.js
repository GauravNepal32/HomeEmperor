import React from "react";
import { useLocation,Link } from "react-router-dom";
import NoResult from "./NoResult";
import SearchBox from "./SearchBox";

const SearchResult = () => {
  const {state} = useLocation();
  return (
    <div className='main-container'>
      <SearchBox />
{(state !==null)?(
  <>
  {state.result.search_results.length !== 0 ? (
<div className='row mt-5 px-md-5'>
        <div className='search-result-info-container ms-3'>
          <h5 className='sub-heading'>{state.result.search_results.length} result found</h5>
        </div>
        <div className='search-card-container d-flex justify-content-sm-start justify-content-center px-0 mt-5'>
          <div className='row d-flex justify-content-center'>
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

  </>

       ):<NoResult keyword={""}/>}

      {/* // <div className='pagination-container  d-flex justify-content-center my-5'>
      //   <nav aria-label='Page navigation example'>
      //     <ul className='pagination'>
      //       <li className='page-item'>
      //         <a className='page-link' aria-label='Previous'>
      //           <span aria-hidden='true'>&laquo;</span>
      //           <span className='sr-only'>Previous</span>
      //         </a>
      //       </li>
      //       <li className='page-item active'>
      //         <a className='page-link '>1</a>
      //       </li>
      //       <li className='page-item'>
      //         <a className='page-link '>2</a>
      //       </li>
      //       <li className='page-item'>
      //         <a className='page-link '>3</a>
      //       </li>
      //       <li className='page-item'>
      //         <a className='page-link '>4</a>
      //       </li>
      //       <li className='page-item'>
      //         <a className='page-link '>5</a>
      //       </li>
      //       <li className='page-item'>
      //         <a className='page-link' aria-label='Next'>
      //           <span aria-hidden='true'>&raquo;</span>
      //           <span className='sr-only'>Next</span>
      //         </a>
      //       </li>
      //     </ul>
      //   </nav>
      // </div> */}
    </div>
  );
};

export default SearchResult;
