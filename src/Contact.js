import React, { useState, useEffect } from "react";
import contactTop from "./images/contact/contact.jpeg";
import FAQ from "./FAQ";
import axios from "axios";

const Contact = () => {
  const faqList = [];
  const [faqs, setfaqs] = useState([]);

  useEffect(() => {
    axios
      .get("https://elscript.co/github/emperor-backend/api/faqs")
      .then((response) => {
        {
          response.data.data.map((faqArray) => {
            const faqListObject = {
              question: `${faqArray.title}`,
              answer: `${faqArray.description}`,
              open: false,
            };
            faqList.push(faqListObject);
          });
          setfaqs(faqList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Toggle FAQ section

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faqopen, i) => {
        if (i === index) {
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
        <div className='email-form-container mb-200 container px-md-5 mb-5'>
          <h1 className='sub-heading text-center email-form-sub mx-auto'>
            EMAIL
          </h1>
          <h1 className='main-heading text-capitalize text-center mt-4'>
            Get in touch with us
          </h1>
          <div className='form-container mt-5'>
            <div className='row row-cols-md-2 row-cols-1 g-4'>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control'
                    id='floatingInputGrid'
                    placeholder='John'
                  />
                  <label htmlFor='floatingInputGrid'>First Name</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control'
                    id='floatingInputGrid'
                    placeholder='Smith'
                  />
                  <label htmlFor='floatingInputGrid'>Last Name</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='email'
                    className='form-control'
                    id='floatingInputGrid'
                    placeholder='john@example.com'
                  />
                  <label htmlFor='floatingInputGrid'>Email address</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control'
                    id='floatingInputGrid'
                    placeholder='99999999'
                  />
                  <label htmlFor='floatingInputGrid'>Phone Number</label>
                </div>
              </div>
              <div className='col-md w-100'>
                <div className='form-floating'>
                  <textarea
                    className='form-control'
                    style={{ height: "150px" }}
                    placeholder='Leave a comment here'
                    id='floatingTextarea'></textarea>
                  <label htmlFor='floatingTextarea'>Message</label>
                </div>
              </div>
            </div>
            <div className='form-submit-container text-end mt-4'>
              <input
                style={{ backgroundColor: "#0A2343", color: "white" }}
                className='btn p-3 contact-submit-btn'
                type='submit'
                value='SEND MESSAGE'
              />
            </div>
          </div>
        </div>
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
