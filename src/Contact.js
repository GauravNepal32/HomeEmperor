import React, { useState, useEffect } from "react";
import contactTop from "./images/contact/contact.jpeg";
import FAQ from "./FAQ";
import axios from "axios";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
const Contact = () => {
  const faqList = [];
  const [faqs, setfaqs] = useState([]);
  const auth=useAuth();
  const navigate=useNavigate();

  useEffect(() => {
    axios
    // Calling get api for faqs
      .get(`${auth.baseURL}/api/faqs`)
      .then((response) => {
        {
          response.data.data.map((faqArray) => {
            // Converting response to custom array
            const faqListObject = {
              question: `${faqArray.title}`,
              answer: `${faqArray.description}`,
              // adding open boolean to check if faq is open or not
              open: false,
            };
            // Pushing  the new array
            faqList.push(faqListObject);
          });
          setfaqs(faqList);
        }
      })
      .catch((err) => {
        navigate('/error')
      });
  }, []);

  // Toggle FAQ section
  const toggleFAQ = (index) => {
    setfaqs(

      faqs.map((faqopen, i) => {
        if (i === index) {
          // If click open the faq
          faqopen.open = !faqopen.open;
        } else {
          faqopen.open = false;
        }
        return faqopen;
      })
    );
  };
  return (
    <>
      <div className='main-container'>
        <div className='contact-image-container'>
          <img className='' src={contactTop} alt='' />
        </div>
        <div className='contact-sub-container mb-200 container d-flex flex-wrap justify-content-center  '>
          <div className='contact-sub-child p-4'>
            <div className='contact-icons-container mx-auto d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-envelope'></i>
            </div>
            <div className='contact-heading-container text-center mt-4'>
              <h5 className='fw-bold'>General Information</h5>
            </div>
            <div className='contact-text-container text-center'>
              <p className='info-paragraph text-center'>info@een.com</p>
            </div>
          </div>
          <div className='contact-sub-child p-4'>
            <div className='contact-icons-container mx-auto d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-location-dot'></i>
            </div>
            <div className='contact-heading-container text-center mt-4'>
              <h5 className='fw-bold'>Location</h5>
            </div>
            <div className='contact-text-container text-center'>
              <p className='info-paragraph text-center'>
                Headquater: Kathmandu,Nepal
              </p>
              <p className='info-paragraph text-center'>
                Branch Office: Kathmandu,Nepal
              </p>
            </div>
          </div>
          <div className='contact-sub-child p-4'>
            <div className='contact-icons-container mx-auto d-flex justify-content-center align-items-center'>
              <i className='fa-solid fa-phone'></i>
            </div>
            <div className='contact-heading-container text-center mt-4'>
              <h5 className='fw-bold'>Call Us</h5>
            </div>
            <div className='contact-text-container text-center'>
              <p className='info-paragraph text-center'>9112233889</p>
            </div>
          </div>
        </div>
       <ContactForm/>
        <div class='faq-containers mb-5'>
          <div class='container px-md-5'>
            <h4 class='text-center mx-auto contact-heading underline main-heading'>
              FAQs
            </h4>

            <div class='faq-wrapper'>
              {faqs.map((faq, i) => (
                <>
                  {/* Passing faq object */}
                  <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
