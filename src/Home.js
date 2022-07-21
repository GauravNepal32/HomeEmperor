import React from "react";
import Country from "./Country";
import assistantImage1 from "./images/assistant/consultant-ashwinnath-small.png";
import assistantImage2 from "./images/assistant/consultant-disha-small.png";
import assistantImage3 from "./images/assistant/consultant-mohit-small.png";
import ServiceCard from "./ServiceCard";
import raviImg from "./images/clients/ravi.png";
import shreyaImg from "./images/clients/43.png";
import krishnaImg from "./images/clients/three.png";
import Testimonials from "./Testimonials";
import useFetch from "./useFetch";
import SearchBox from "./SearchBox";
import landingImage from "./images/landing.png";
import LocationMap from "./LocationMap";

const Home = () => {
  const {
    data: countries,
    error,
    isPending,
  } = useFetch("http://192.168.1.64:8000/countries");

  return (
    <div id='' className='main-container'>
      <div className='front-main-container'>
        <div className="search-container">
          <SearchBox />
        </div>
      </div>
        <div className='main-container container mt-5 px-md-5'>
          <div className='row mb-200 mt-5 pt-5 row-cols-sm-2 row-cols-1 landing-container'>
            <div className='col d-flex pt-5 order-sm-0 order-1 justify-content-center'>
              <div className='landing-page-container'>
                <div className='container px-0'>
                  <div className=''>
                    <h1 className='main-heading'>
                      Leading Consultancy <br /> in Nepal
                    </h1>
                    <h3 className='mt-5'>Emperor Education Network</h3>
                    <button className='btn mt-5 btn-type-1'>
                      JOIN US<i className='bi ms-3 bi-arrow-right'></i>
                  </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col d-sm-block d-none order-sm-1 order-0 ps-5 ps-sm-0 d-flex justify-content-center my-5'>
              <div className='landing-image-wrapper ps-5'>
                <img
                  className='img-fluid landing-image'
                  src={landingImage}
                  alt='Connecting World'
                />
              </div>
            </div>
          </div>

          {/* <!-- Popular Country Container --> */}
          <div className='row mb-200 top-destination-container mt-5 d-flex align-content-center justify-content-center'>
            <div className='container px-5'>
              <h1 className='main-heading text-center fw-light'>
                Popular Destination for the student
              </h1>
              <p className='info-paragraph text-center'>
                Where Do You Want to Study?
              </p>
              <div className='all-country-container mt-5'>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
              {countries && <Country countryList={countries} />}
            </div>
          </div>

          <div className='row mb-200 emperor-stats-container mt-5'>
            <div className='container mt-5'>
              <h1 className='main-heading text-center'>Why Emperor?</h1>
              <div className='year-service-container'>
                <h1 className='text-center mb-0'>20</h1>
                <h3 className='text-center text-uppercase mt-0'>
                  years of excellence service
                </h3>
              </div>

              {/* <!-- Company Stats Conatiner --> */}
              <div className='mt-5 company-stats-container'>
                <div className=' row'>
                  <div className='row mx-auto g-4 row-cols-md-6 row-cols-sm-2 row-cols-1'>
                    <div className='col stats-odd'>
                      <div className='stats-top'>
                        <div className='h1 text-center'>10K+</div>
                        <p className='text-center'>Students Statisfied</p>
                      </div>
                    </div>
                    <div className='col stats-even'>
                      <div className='stats-top'>
                        <div className='h1 text-center'>100+</div>
                        <p className='text-center'>University</p>
                      </div>
                    </div>
                    <div className='col stats-odd'>
                      <div className='stats-top'>
                        <div className='h1 text-center'>500+</div>
                        <p className='text-center'>Courses</p>
                      </div>
                    </div>
                    <div className='col stats-even'>
                      <div className='stats-top'>
                        <div className='h1 text-center'>5</div>
                        <p className='text-center'>Country</p>
                      </div>
                    </div>
                    <div className='col stats-odd'>
                      <div className='stats-top'>
                        <div className='h1 text-center'>95%</div>
                        <p className='text-center'>Visa Approval</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Services Container --> */}
          <div className='row service-container mb-200'>
            <h1 className='text-center main-heading'>Our Premium Services</h1>
            <div className='container mt-5'>
              <div className='row row-cols-lg-4 row-col-md-2 row-cols-sm-2 row-cols-1 g-2 '>
                <ServiceCard
                  cardTitle='carrer counseling'
                  iconURL='FaGraduationCap'
                  cardText='The great thing about our counsellors is they will not only give
                                        you information about the course or the university or the country
                                        a student has selected but will also provide information of what
                                        to expect when the student actually sets foot in their
                                        destination.'
                  cardNum='1'
                />
                <ServiceCard
                  cardTitle='TEST PREPRATION'
                  iconURL='FaFile'
                  cardText=' Our teachers make sure to provide students the
                                    platform to express themselves freely and become
                                    go-getters. The tips that are required to score good
                                    marks will be provided to the students but more than
                                    that our teachers will make sure that students get
                                    personalized care.'
                  cardNum='2'
                />
                <ServiceCard
                  cardTitle='DOCUMENT PROCESSING'
                  iconURL='FaAddressBook'
                  cardText=' At Emperor Education we also make sure that the
                                    documents submitted by students are kept in a highly
                                    secure manner. Every student should be aware that fake
                                    documents not only mar the chances of them being
                                    admitted to a college or university or getting a visa
                                    to their desired country.'
                  cardNum='3'
                />
                <ServiceCard
                  cardTitle='Accommodation'
                  iconURL='FaBuilding'
                  cardText=' At Emperor Education we also make sure that the
                                    documents submitted by students are kept in a highly
                                    secure manner. Every student should be aware that fake
                                    documents not only mar the chances of them being
                                    admitted to a college or university or getting a visa
                                    to their desired country.'
                  cardNum='4'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-200 p-0 mx-0 contact-container'>
        <div className='px-sm-5'>
          <div className='px-sm-5'>
            <h1 className='main-heading'>Get the Global Education Abroad</h1>
            <p className='info-paragraph'>
              Get in touch with our experience assistants.
            </p>
            <div className='assistant-container my-4'>
              {/* <!-- Team Images --> */}
              <div>
                <img
                  style={{ backgroundColor: "red" }}
                  className='assistants'
                  src={assistantImage1}
                  alt='Team member 1'
                />
                <img
                  style={{ backgroundColor: "orange" }}
                  className='assistants'
                  src={assistantImage2}
                  alt='Team member 2'
                />
                <img
                  style={{ backgroundColor: "yellowgreen" }}
                  className='assistants'
                  src={assistantImage3}
                  alt='Team member 3'
                />
              </div>
            </div>
            <div className='d-flex'>
              <input
                className='front-mobile-input p-2 rounded'
                type='text'
                name='callback-phone'
                placeholder='Mobile Number'
              />
              <button className='btn ms-1 btn-type-1'>Get a Call</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team Intro Container --> */}
      <div className='main-container container mb-200 mt-5 px-md-5'>
        <div className='row mb-200'>
          <div className='container'>
            <div className='row row-cols-md-2 row-cols-1'>
              <div className='col order-md-0 order-1'></div>
              <div className='col order-md-1 order-0'>
                <h1 className='main-heading'>
                  Friendly, Cooperative & Knowldegable Team
                </h1>
                <p className='info-paragraph mt-5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident sapiente, possimus at, eius reiciendis pariatur
                  architecto quos asperiores enim dolor animi quidem sunt
                  dignissimos. Tempore nihil nisi, quas vitae qui perferendis,
                  maxime laudantium illo perspiciatis ullam esse natus corrupti
                  debitis assumenda, suscipit similique voluptate obcaecati quis
                  sint sit delectus inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row partner-container mb-200'>
          <h1 className='main-heading text-center'>Our Partners</h1>
          <p className='text-center info-paragraph my-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in
            dicta doloribus ab facere sint, fugiat, nostrum fugit quae dolorum
            repudiandae iste pariatur deleniti impedit!
          </p>
          <div className='partner-image-slider mx-auto text-center mt-5'>
            <div className='partner-image mx-auto'></div>
          </div>
        </div>

        {/* <!-- Testimonals Container --> */}
        <div className='row mb-200 mt-5'>
          <h3 className='sub-heading text-center text-uppercase'>
            Testimonials
          </h3>
          <h1 className='main-heading text-center mt-1'>
            Words for our student
          </h1>
          <div className='testimonials-container'>
            <div className='row mt-5 row-cols-lg-3 row-col-md-2 row-cols-sm-2 row-cols-1 g-2 '>
              <Testimonials
                clientText='Emperor Education is a premier educational consulting firm located in Kathmandu, Nepal. They provide real and legitimate information on studying overseas. If you are searching for admission to a prestigious university in Australia, I strongly advise prospective students to visit Emperor Education.'
                clientName='Ravi Shrestha'
                clientImg={raviImg}
                cilentDestination='Australia'
                cardNum='1'
              />
              <Testimonials
                clientText='Emperor Education is one of the top study in Canada consultancies in Nepal. Keshav Sir and Nishant Sir are the top counselors for Canada study help and 100% support at Emperor Education. I am delighted to inform you that, thanks to the efforts of the whole Emperor team, I have been admitted as a Loyalist College postgraduate student in the program Hospitality Management- Canadian Hotel and Resort. Best wishes!'
                clientName='Shreya Basnet'
                clientImg={shreyaImg}
                cilentDestination='Canada'
                cardNum='2'
              />
              <Testimonials
                clientText='I am grateful to the entire Emperor Education team, especially Keshav Dhungana sir and Nishat sir. I received my visa and the greatest advice to help me attain my objective. Choosing Emperor Education was the best move I ever made.'
                clientName='Krishna Acharya'
                clientImg={krishnaImg}
                cilentDestination='USA'
                cardNum='3'
              />
            </div>
          </div>
        </div>

        {/* <!-- Company Location  --> */}
        <div className='row mt-5'>
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default Home;
