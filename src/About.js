import React, { useState, useEffect } from "react";
import Testimonials from "./Testimonials";
import team from "./images/emperor/team.png";
import ceo from "./images/emperor/ceo.png";
import LocationMap from "./LocationMap";
import axios from "axios";
import Loading from "./Loading";

const About = () => {
  const [testimonials, setTestimonials] = useState(null);
  const [renderApp, setRenderApp] = useState(false);

  useEffect(() => {
    axios
      .get("https://heuristic-wescoff.128-199-28-111.plesk.page/api/testimonials")
      .then((response) => {
        setTestimonials(response.data.data);
        setRenderApp(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {renderApp ? (
        <div className='main-container my-5'>
          <div className='container px-sm-5'>
            <div className='row mb-200'>
              <div className='container'>
                <div className='row row-cols-md-2 row-cols-1'>
                  <div className='col order-1'>
                    <img src={team} className='img-fluid' alt='' srcset='' />
                  </div>
                  <div className='col  order-0'>
                    <div className='h-100 d-flex flex-column justify-content-center align-content-center'>
                      <h1 className='main-heading'>We're result driven team</h1>
                      <p className='info-paragraph mt-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Provident sapiente, possimus at, eius reiciendis
                        pariatur architecto quos asperiores enim dolor animi
                        quidem sunt dignissimos. Tempore nihil nisi, quas vitae
                        qui perferendis, maxime laudantium illo perspiciatis
                        ullam esse natus corrupti debitis assumenda, suscipit
                        similique voluptate obcaecati quis sint sit delectus
                        inventore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mb-200'>
              <h1 className='text-center main-heading text-wrap'>
                Our goal to eliminate obstacles so <br /> you may create your
                own future.
              </h1>
              <p className='text-center mt-5 info-paragraph'>
                We adhere to six success pillars. These check that everyone is
                headed in the same direction and inspire students to plan their
                future.
              </p>
            </div>
            <div className='row mb-200 ceo-message-container'>
              <div className='row row-cols-md-2 row-cols-1'>
                <div className='col order-0 d-md-block d-none'>
                  <div className='ceo-image-container'>
                    <div className='ceo-image-wrapper mx-auto'>
                      <img src={ceo} className='img-fluid' alt='' srcset='' />
                    </div>
                    <h4 className='text-center mt-4'>Keshav Dhungana</h4>
                  </div>
                </div>
                <div className='col  order-1'>
                  <div className='h-100 d-flex flex-column justify-content-center align-content-center'>
                    <h1 className='main-heading text-md-start text-center'>
                      Message from Our CEO
                    </h1>
                    <div className='ceo-image-container d-md-none d-block mt-5'>
                      <div className='ceo-image-wrapper mx-auto'>
                        <img src={ceo} className='img-fluid' alt='' srcset='' />
                      </div>
                      <h4 className='text-center mt-4'>Keshav Dhungana</h4>
                    </div>
                    <p className='info-paragraph mt-5'>
                      Everyone tells you that the world appears a certain way.
                      Parents influence you on how to think. Schools teach
                      students how to think. And then, if you're lucky, you
                      learn you can make your own decisions. Nobody except you
                      can make the rules and you have the ability to create your
                      own
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='row mb-200'>
          <div className='row row-cols-md-2 row-cols-1'>
            <div className='col order-1 p-md-5'>
              <div className='row row-cols-2 g-4'>
                <div className='col pillar-container pillar-team d-flex justify-content-between'>
                  <div>
                    <span className='material-icons'>groups</span>
                  </div>
                  <h6>Team</h6>
                </div>
                <div className='col pillar-container pillar-trust d-flex justify-content-between'>
                  <div>
                    <span className='material-icons'>favorite</span>
                  </div>
                  <h6>Trust & Respect</h6>
                </div>
                <div className='col pillar-container pillar-customer d-flex justify-content-between'>
                  <div>
                    <span className='material-icons'>person</span>
                  </div>
                  <h6>Customers</h6>
                </div>
                <div className='col pillar-container pillar-trans d-flex justify-content-between'>
                  <div>
                    <span className='material-icons'>visibility</span>
                  </div>
                  <h6>Transparency</h6>
                </div>
              </div>
            </div>
            <div className='col  order-0'>
              <div className='h-100 d-flex flex-column justify-content-center align-content-center'>
                <h1 className='main-heading text-center text-md-start'>
                  How are we successful?
                </h1>

                <p className='info-paragraph mt-5 text-center text-md-start'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident sapiente, possimus at, eius reiciendis pariatur
                  architecto quos asperiores enim dolor animi quidem sunt
                  dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div> */}
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
            <div className='row'>
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

export default About;
