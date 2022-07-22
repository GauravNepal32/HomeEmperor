import React from "react";
import SearchBox from "./SearchBox";

const SearchResult = () => {
  return (
    <div class='main-container'>
      <SearchBox />
      <div class='row mt-5 px-md-5'>
        <div class='search-result-info-container ms-3'>
          <h5 class='sub-heading'>10 result found</h5>
          <div class='search-keyword-holder d-flex'>
            <div class='keyword-container'>
              USA
              <i class='fa-solid fa-x'></i>
            </div>
            <div class='keyword-container'>
              IT
              <i class='fa-solid fa-x'></i>
            </div>
            <div class='keyword-container'>
              Undergraduate
              <i class='fa-solid fa-x'></i>
            </div>
          </div>
        </div>
        <div class='search-card-container d-flex justify-content-center mt-5'>
          <div class='row d-flex justify-content-center'>
            <div class='col'>
              <div class='search-result-card card'>
                <img
                  src='../images/colleges/harvard.jpeg'
                  class='card-img-top'
                  alt='...'
                />
                <div class='card-body'>
                  <h5 class='card-title d-flex justify-content-between'>
                    <p class='college-name'>Harvard College</p>
                    <p class='college-tution sub-heading'>$ 3000000</p>
                  </h5>
                  <p class='card-text'>
                    Harvard Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Necessitatibus quaerat porro et vitae quae beatae
                    dolorem nisi obcaecati quisquam perferendis!
                  </p>
                  <a href='#' class='btn btn-type-1 p-2'>
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='search-result-card card'>
                <img
                  src='../images/colleges/harvard.jpeg'
                  class='card-img-top'
                  alt='...'
                />
                <div class='card-body'>
                  <h5 class='card-title d-flex justify-content-between'>
                    <p class='college-name'>Harvard College</p>
                    <p class='college-tution sub-heading'>$ 3000000</p>
                  </h5>
                  <p class='card-text'>
                    Harvard Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Necessitatibus quaerat porro et vitae quae beatae
                    dolorem nisi obcaecati quisquam perferendis!
                  </p>
                  <a href='#' class='btn btn-type-1 p-2'>
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='search-result-card card'>
                <img
                  src='../images/colleges/harvard.jpeg'
                  class='card-img-top'
                  alt='...'
                />
                <div class='card-body'>
                  <h5 class='card-title d-flex justify-content-between'>
                    <p class='college-name'>Harvard College</p>
                    <p class='college-tution sub-heading'>$ 3000000</p>
                  </h5>
                  <p class='card-text'>
                    Harvard Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Necessitatibus quaerat porro et vitae quae beatae
                    dolorem nisi obcaecati quisquam perferendis!
                  </p>
                  <a href='#' class='btn btn-type-1 p-2'>
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='search-result-card card'>
                <img
                  src='../images/colleges/harvard.jpeg'
                  class='card-img-top'
                  alt='...'
                />
                <div class='card-body'>
                  <h5 class='card-title d-flex justify-content-between'>
                    <p class='college-name'>Harvard College</p>
                    <p class='college-tution sub-heading'>$ 3000000</p>
                  </h5>
                  <p class='card-text'>
                    Harvard Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Necessitatibus quaerat porro et vitae quae beatae
                    dolorem nisi obcaecati quisquam perferendis!
                  </p>
                  <a href='#' class='btn btn-type-1 p-2'>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='pagination-container  d-flex justify-content-center my-5'>
        <nav aria-label='Page navigation example'>
          <ul class='pagination'>
            <li class='page-item'>
              <a class='page-link' aria-label='Previous'>
                <span aria-hidden='true'>&laquo;</span>
                <span class='sr-only'>Previous</span>
              </a>
            </li>
            <li class='page-item active'>
              <a class='page-link '>1</a>
            </li>
            <li class='page-item'>
              <a class='page-link '>2</a>
            </li>
            <li class='page-item'>
              <a class='page-link '>3</a>
            </li>
            <li class='page-item'>
              <a class='page-link '>4</a>
            </li>
            <li class='page-item'>
              <a class='page-link '>5</a>
            </li>
            <li class='page-item'>
              <a class='page-link' aria-label='Next'>
                <span aria-hidden='true'>&raquo;</span>
                <span class='sr-only'>Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SearchResult;
