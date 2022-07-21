import React from "react";
import { Link } from "react-router-dom";
import ieltsLogo from "./images/test/ielts.png";

const TestList = (props) => {
    const { test } = props;
    return (
        <div className='test-List'>
            {test.map((Test) => (
                <div>
                    <div className={Test.id % 2 !== 0 ? "odd-prep-container py-5 mb-5" : "even-prep-container py-5 mb-5"}>
                        <div class='container px-md-0'>
                            <div className='container px-md-5 px-2  p-0'>
                                <div class='row row-cols-md-2 px-md-3 px-2  row-cols-1'>
                                    <div class='col prep-image-container d-flex align-content-center'>
                                        <div class='test-image-holder d-md-block d-none m-auto '>
                                            <img src={ieltsLogo} class='img-fluid' alt='' srcset='' />
                                        </div>
                                    </div>
                                    <div class='col prep-info-container px-0'>
                                        <div class='h-100 d-flex flex-column justify-content-center align-content-center'>
                                            <h1 class='main-heading'>
                                                {Test.examName} Exam Preparation
                                            </h1>
                                            <div class='test-image-holder d-md-none d-block mx-auto '>
                                                <img src={ieltsLogo} class='img-fluid' alt='' srcset='' />
                                            </div>
                                            <p class='info-paragraph mt-5'>{Test.examText}</p>
                                            <div class='text-end'>
                                                <Link to={`/test/${Test.id}`} class='btn courses-btn btn-type-1 text-end'>
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestList;
