import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useAuth } from "./auth";

const CallBack = () => {
   const auth = useAuth();
    const [phoneNumber, setPhoneNumber] = useState('');

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
        console.log(phone)
        try {
            // Calling post api to store call request
            const response = await axios.post(`${auth.baseURL}/api/phone-number`, { phone })
            console.log(response)

            if (response.data.statusCode === 200) {
                // If success display success message
                showsuccessToastMessage();
                setPhoneNumber('');
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
    return (
      <div className='col-md-4 d-md-block d-none col-12 d-flex justify-content-end'>
        <div className='h-100'>
          <div className='side-callback-wrapper'>
            <div className='d-flex justify-content-end'>
              <div className='callback-request-container p-3'>
                <h6 className='text-center'>Get Expert Admission Guidance</h6>
                <p className='mt-3 text-center'>
                  Application fee waiver - Appl Assistance - upto 100%
                  scholarship - SOP Prep
                </p>
                 <input
                    className='w-100 p-2 rounded'
                    type='tel'
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => {
                        const re = /^[0-9\b]+$/;

                        // if value is not blank, then test the regex

                        if (e.target.value === '' || re.test(e.target.value)) {
                            setPhoneNumber(e.target.value)
                        }
                    }
                    }
                    id='callback-phone'
                    name='callback-phone'
                    placeholder='Mobile Number'
                />
                <div className=''>
                  <button onClick={handleCall} className='btn btn-type-2 mt-3 text-nowrap p-2 w-100'>
                    Request callback
                  </button>
                </div>
              </div>
            </div>
            <div className='d-flex mt-2 justify-content-end'>
              <div className='callback-online-request-container p-3'>
                <h6 className='text-center'>Reach Us Online</h6>
                <p className='mt-4 text-center '>
                  Our team can be reached through different social network
                </p>
                <div className=''>
                  <div className='d-lg-flex justify-content-center mt-lg-5 align-content-center'>
                    <button className='btn whatsapp-btn mt-md-0 mt-3 mx-1 p-2 d-flex align-content-between my-auto'>
                      <i className='fa-brands fa-whatsapp my-auto me-lg-3'></i>
                      WhatsApp
                    </button>
                    <button className='btn messenger-btn mt-md-0 mt-3 mx-1 p-2 d-flex align-content-between my-auto'>
                      <i className='fa-brands fa-facebook-messenger my-auto me-lg-3'></i>
                      Messenger
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CallBack;
