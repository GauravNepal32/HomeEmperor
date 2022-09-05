import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from './auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetCallFooter = () => {
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
        const phone = document.getElementById('callback-phone1').value;
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
        <div className='d-flex'>
            <ToastContainer />
            <form onSubmit={handleCall} className="d-flex mx-auto mt-4" action="">
                <input
                    className='front-mobile-input w-auto p-2 rounded'
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
                    id='callback-phone1'
                    name='callback-phone'
                    placeholder='Mobile Number'
                />
                <input type="submit" value="SUBMIT" className='btn ms-1 btn-type-1' />
            </form>
        </div>
    )
}

export default GetCallFooter