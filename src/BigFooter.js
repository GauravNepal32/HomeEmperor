import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth";
import footerLogo from "./images/emperor/companyLogoWhite.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetCallFooter from "./GetCallFooter";

const BigFooter = () => {
  const auth = useAuth();
  // Success Toast function
  const showsuccessToastMessage = () => {
    toast.success('Number recieved successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };
  // Error toast function
  const showserrorToastMessage = () => {
    toast.error('Unable to get Number!', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };
  // Handle submit function
  const handleCall = async (e) => {
    // Stopping form to reload page
    e.preventDefault();
    // Getting value from form input
    const phone = document.getElementById('callback-phone').value;

    try {
      // Calling post api to store call request
      const response = await axios.post(`${auth.baseURL}/api/phone-number`, { phone })
      console.log(Number(response.data.statusCode))
      if (response.data.statusCode === 200) {
        // If success display success message
        showsuccessToastMessage();
      }
      else {
        // If error display error message
        console.log("error")
        showserrorToastMessage();
      }
    } catch (err) {
      showserrorToastMessage();
    }
  }

// Getting current time
  const currentTime=new Date()
  return (
    <div className='container-fluid footer py-5'>
      <div className='container px-lg-5'>
        <div className='row row-cols-md-3 row-cols-sm-2 row-cols-1'>
          <div className='col'>
            <div className='company-logo'>
              <img className='img-fluid' src={footerLogo} alt='Company Logo' />
            </div>
            <div className='company-info mt-4'>
              <p className='text-white info-paragraph'>
                Emperor Education promises to be a one-stop solution for
                students, whether it be to realize their dream of a global
                education or preparing for the various tests that students need
                to sit for before they can go abroad.
              </p>
            </div>
            <div className='footer-subheading mt-5'>
              <div className='social-links text-white mt-5'>
                <a className='text-white mx-2' target="_blank" href='https://ne-np.facebook.com/EEN2021/'>
                  <i className='bi bi-facebook'></i>
                </a>
                <a className='text-white mx-2' target="_blank" href='https://www.instagram.com/emperor_en/'>
                  <i className='bi bi-instagram'></i>
                </a>
                <a className='text-white mx-2' target="_blank" href='https://np.linkedin.com/company/emperor-education-network?trk=public_profile_experience-item_profile-section-card_subtitle-click&original_referer=https%3A%2F%2Fwww.google.com%2F'>
                  <i className='bi bi-linkedin'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='text-white mt-md-0 mt-4 text-sm-center'>
              <h4 className='footer-heading'>Company</h4>
              <div className='footer-subheading mt-5'>
                <Link className='text-decoration-none text-white' to="/about">
                  <p>About US</p>
                </Link>
                <Link className='text-decoration-none text-white' to="/testPrep">
                  <p>Test Preparation</p>
                </Link>
                <Link className='text-decoration-none text-white' to="/contact">
                  <p>Contact US</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='text-white mt-md-0 mt-4 text-sm-center'>
              <h4 className='footer-heading'>Get In Touch</h4>
              <div className="mt-3">
                <GetCallFooter />
              </div>
              {/* <div className="location-container mt-5">
                <div className="head-quarter">
                  <div className="location-name my-auto">
                    <span className="fw-bold">
                      Head Office:
                    </span>
                    <div className="d-flex mt-3 justify-content-center">
                      <span class="material-symbols-outlined my-auto me-3">
                        location_on
                      </span>
                      <div className="location-name my-auto">
                        <a target="_blank" className="text-white text-decoration-none" href="https://www.google.com/maps/place/Emperor+Education+Network/@27.7066099,85.3202373,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb1973c96e0cd5:0xdbb28c517dd06bfb!8m2!3d27.7066099!4d85.322426">
                          Putalisadak,Kathmandu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="branch-quarter mt-4">
                  <div className="location-name my-auto">
                    <span className="fw-bold">
                      Branch Office:
                    </span>
                    <div className="d-flex mt-3 justify-content-center">
                      <span class="material-symbols-outlined my-auto me-3">
                        location_on
                      </span>
                      <div className="location-name my-auto">
                        <a target="_blank" className="text-white text-decoration-none" href="https://www.google.com/maps/place/Emperor+Education+Network/@27.7066099,85.3202373,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb1973c96e0cd5:0xdbb28c517dd06bfb!8m2!3d27.7066099!4d85.322426">
                          Birtamode,Jhapa
                        </a>
                      </div>
                    </div>
                    <div className="d-flex mt-3 justify-content-center">
                      <span class="material-symbols-outlined my-auto me-3">
                        location_on
                      </span>
                      <div className="location-name my-auto">
                        <a target="_blank" className="text-white text-decoration-none" href="https://www.google.com/maps/place/Emperor+Education+Network/@27.7066099,85.3202373,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb1973c96e0cd5:0xdbb28c517dd06bfb!8m2!3d27.7066099!4d85.322426">
                          Dhangadhi,Nepal
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className='copyright-container mt-5 d-flex justify-content-between'>
          <div className='text-white mt-4 copyright-text'>
            Copyright &copy; {currentTime.getFullYear()} Emperor Education Network
          </div>
          <div className='text-white mt-4 copyright-text text-end'>
            Powered By
            <a
              className='text-decoration-none text-white'
              target='_blank'
              href='https://elscript.com/'>
              {" "}
              Elscript Technology Pvt.Ltd
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigFooter;
