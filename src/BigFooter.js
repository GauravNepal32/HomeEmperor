import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "./images/emperor/companyLogoWhite.png";

const BigFooter = () => {
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
          <div className='col'>
            <div className='text-white mt-md-0 mt-4 text-sm-center'>
              <h4 className='footer-heading'>Company</h4>
              <div className='footer-subheading mt-5'>
                <Link className='text-decoration-none text-white' to="/about">
                  <p>About US</p>
                </Link>
                <Link className='text-decoration-none text-white' to="/team">
                  <p>Team</p>
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
              <h4 className='footer-heading'>Pratical Matter</h4>
              <div className='footer-subheading mt-5'>
                <a className='text-decoration-none text-white' href=''>
                  <p>Blogs</p>
                </a>
                <a className='text-decoration-none text-white' href=''>
                  <p>Reviews</p>
                </a>
                <a className='text-decoration-none text-white' href=''>
                  <p>Terms Conditions</p>
                </a>
                <a className='text-decoration-none text-white' href=''>
                  <p>Privacy Policy</p>
                </a>
                <a className='text-decoration-none text-white' href=''>
                  <p>Refund Policy</p>
                </a>
              </div>
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
