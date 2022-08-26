import React, { useEffect, useState } from "react";
import Country from "./Country";
import assistantImage1 from "./images/assistant/consultant-ashwinnath-small.png";
import assistantImage2 from "./images/assistant/consultant-disha-small.png";
import assistantImage3 from "./images/assistant/consultant-mohit-small.png";
import ServiceCard from "./ServiceCard";
import Testimonials from "./Testimonials";
import SearchBox from "./SearchBox";
import landingImage from "./images/landing.png";
import LocationMap from "./LocationMap";
import axios from "axios";
import Loading from "./Loading";
import NoResponse from "./NoResponse";
import {Helmet} from "react-helmet";
import team from "./images/emperor/team.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const [countries, setCountries] = useState();
  const [testimonials, setTestimonials] = useState();
  const [renderApp, setRenderApp] = useState(false);

  const showsuccessToastMessage = () => {
    toast.success('Number recieved successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };
  const showserrorToastMessage = () => {
    toast.error('Unable to get Number!', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  useEffect(() => {
    axios
      .get("https://elscript.co/github/emperor-backend/api/countries")
      .then((response) => {
        setCountries(response.data.data.slice(response.data.data.length-4,response.data.data.length));
      });
    axios
      .get("https://elscript.co/github/emperor-backend/api/testimonials")
      .then((response) => {
        setTestimonials(response.data.data);
        setRenderApp(true);
      })
      .catch((err) => {
        console.log(err);
        <NoResponse />;
      });
  }, []);

  const handleCall = async (e) => {
    e.preventDefault();
    const phone = document.getElementById('callback-phone').value;

    console.log(phone)
    try {
      const response = await axios.post('https://elscript.co/github/emperor-backend/api/phone-number', { phone })
      console.log(Number(response.data.statusCode))
      if (response.data.statusCode === 200) {
        console.log("success")
        showsuccessToastMessage();
      }
      else {
        console.log("error")
        showserrorToastMessage();
      }
      console.log(response)
    } catch (err) {
      showserrorToastMessage();
    }
  }
  return (
    // Search box container
    <>
      {renderApp ? (
        <div id='' className='main-container position-relative'>
          <ToastContainer />
          <Helmet>
            <title>Home | Emperor</title>
            <meta name="description" content="Emperor Education" />
             <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <div className='main-container container mt-5 px-md-5'>
            <div className='row mb-200 mt-5 pt-5 row-cols-sm-2 row-cols-1 landing-container'>
              <div className='col d-flex pt-5 order-sm-0 order-1'>
                {/* Landing page */}
                <div className='landing-page-container position-relative'>
                  <div className="light-background-container"></div>
                  <div className='container px-0'>
                    <div className=''>
                      <h1 className='main-heading primary-color'>
                        Leading Consultancy <br /> in Nepal
                      </h1>
                      <h3 className='mt-5'>Emperor Education Network</h3>
                      <div className='search-container'>
                        {/* Calling search box components */}
                        <SearchBox />
                      </div>
                      {/* <button className='btn mt-5 btn-type-1'>
                    JOIN US<i className='bi ms-3 bi-arrow-right'></i>
                  </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col d-sm-block d-none order-sm-1 order-0 ps-5 ps-sm-0 d-flex justify-content-center my-5'>
                <div className='landing-image-wrapper position-relative ps-5'>
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
              <div className='container'>
                <h1 className='main-heading text-center'>
                  Popular Destination for the student
                </h1>
                <p className='info-paragraph text-center'>
                  Where Do You Want to Study?
                </p>
                <div className='all-country-container mt-5'>
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
                <h1 className='text-center main-heading'>
                  Our Premium Services
                </h1>
                <div className='container mt-5'>
                  <div className='row row-cols-lg-4 row-col-md-2 row-cols-sm-2 row-cols-1 g-2 '>
                    <ServiceCard
                      cardTitle='carrer counseling'
                      iconURL='school'
                      cardText='The great thing about our counsellors is they will not only give
                                        you information about the course or the university or the country
                                        a student has selected but will also provide information of what
                                        to expect when the student actually sets foot in their
                                        destination.'
                      cardNum='1'
                    />
                    <ServiceCard
                      cardTitle='TEST PREPRATION'
                      iconURL='quiz'
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
                      iconURL='description'
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
                      iconURL='apartment'
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
            <div className='contact-sub-container'></div>
            <div className='px-sm-5'>
              <div className='px-sm-5'>
                <h1 className='main-heading'>
                  Get the Global Education Abroad
                </h1>
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
                  <form onSubmit={handleCall} className="d-flex" action="">
                    <input
                    className='front-mobile-input p-2 rounded'
                      type='tel'
                      pattern="[0-9]{10}"
                      id='callback-phone'
                    name='callback-phone'
                    placeholder='Mobile Number'
                  />
                    <input type="submit" value={'Get a Call'} className='btn ms-1 btn-type-1' />
                  </form>

                </div>
              </div>
            </div>
          </div>
          {/* <!-- Team Intro Container --> */}
          <div className='main-container container mb-200 mt-5 px-md-5'>
            <div className='row mb-200'>
              <div className='container'>
                <div className='row row-cols-md-2 row-cols-1'>
                  <div className='col order-md-0 order-1'>
                    <img src={team} className='img-fluid' alt='' srcset='' />

                  </div>
                  <div className='col order-md-1 order-0'>
                    <h1 className='main-heading'>
                      Friendly, Cooperative & Knowldegable Team
                    </h1>
                    <p className='info-paragraph mt-5'>
                     A team with highly experienced, certified consultants to provide you with absolutely reliable information ensuring personalized, unbiased and quality service for education across the globe. Our friendly & sincere consultants follow a strategic approach, working towards the admission & visa process while being committed to success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row partner-container mb-200'>
              <h1 className='main-heading text-center'>Our Partners</h1>
              <p className='text-center info-paragraph my-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                in dicta doloribus ab facere sint, fugiat, nostrum fugit quae
                dolorum repudiandae iste pariatur deleniti impedit!
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
                <div className=''>
                  <Testimonials testimonials={testimonials} />
                </div>
              </div>
            </div>

            {/* <!-- Company Location  --> */}
            <div className='row mt-5'>
              <LocationMap />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default Home;
