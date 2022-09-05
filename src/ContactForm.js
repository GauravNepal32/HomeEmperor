import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from './auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const auth = useAuth();

    const showToastMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };
    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post(`${auth.baseURL}/api/contact`, { first_name: data.firstName, last_name: data.lastName, email: data.email, phone: data.phoneNumber, message: data.message }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setLoading(false)
            console.log(response.data.statusCode)
            if (Number(response.data.statusCode) === 200) {
                showToastMessage("Message Sent. We will contact you as soon as possible")
            }
        } catch (err) {
            setLoading(false)
            console.log(err)

        }
    }
    return (
        <div>
            <div className='email-form-container mb-200 container px-md-5 mb-5'>
                <h1 className='sub-heading text-center email-form-sub mx-auto'>
                    EMAIL
                </h1>
                <h1 className='main-heading text-capitalize text-center mt-4'>
                    Get in touch with us
                </h1>
                <div className='form-container mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <ToastContainer />
                        <div className='row row-cols-md-2 row-cols-1 g-4'>
                            <div className='col-md'>
                                <div className='form-floating'>
                                    <input
                                        {...register('firstName', {
                                            required: true,
                                            maxLength: 30,
                                            pattern: /^[A-Za-z]+$/i
                                        })}
                                        type='text'
                                        className='form-control'
                                        placeholder='John'
                                    />
                                    {errors?.firstName?.type === "required" && <p>This field is required</p>}
                                    {errors?.firstName?.type === "maxLength" && (
                                        <p>First name cannot exceed 20 characters</p>
                                    )}
                                    {errors?.firstName?.type === "pattern" && (
                                        <p>Alphabetical characters only</p>
                                    )}
                                    <label htmlFor='floatingInputGrid'>First Name</label>
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className='form-floating'>
                                    <input
                                        {...register('lastName', {
                                            required: true,
                                            maxLength: 30,
                                            pattern: /^[A-Za-z]+$/i
                                        })}
                                        type='text'
                                        className='form-control'
                                        placeholder='John'
                                    />
                                    {errors?.lastName?.type === "required" && <p>This field is required</p>}
                                    {errors?.lastName?.type === "maxLength" && (
                                        <p>First name cannot exceed 20 characters</p>
                                    )}
                                    {errors?.lastName?.type === "pattern" && (
                                        <p>Alphabetical characters only</p>
                                    )}
                                    <label htmlFor='floatingInputGrid'>Last Name</label>
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className='form-floating'>
                                    <input
                                        {...register('email', {
                                            required: true,
                                            pattern: /^\S+@\S+$/i
                                        })}
                                        type='text'
                                        className='form-control'
                                        placeholder='John'
                                    />
                                    {errors?.email?.type === "required" && <p>This field is required</p>}
                                    {errors?.email?.type === "pattern" && (
                                        <p>Please enter a valid email</p>
                                    )}
                                    <label htmlFor='floatingInputGrid'>Email address</label>
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className='form-floating'>
                                    <input placeholder='Phone Number' className='form-control' type="text" {...register("phoneNumber", {
                                        required: true, maxLength: 10, pattern: /^[0-9]{10}/i
                                    })} />
                                    {errors?.phoneNumber?.type === "required" && <p>This field is required</p>
                                    }
                                    {errors?.phoneNumber?.type === "maxLength" && <p>Phone Number cannot be more than 10 characters</p>}
                                    {errors?.phoneNumber?.type === "pattern" && (
                                        <p>Please enter a valid phone number</p>
                                    )}
                                    <label htmlFor='floatingInputGrid'>Phone Number</label>
                                </div>
                            </div>
                            <div className='col-md w-100'>
                                <div className='form-floating'>
                                    <textarea
                                        {...register('message', {
                                            required: true,
                                        })}
                                        className='form-control'
                                        style={{ height: "150px" }}
                                        placeholder='Leave a comment here'
                                        id='floatingTextarea'></textarea>
                                    {errors?.message?.type === "required" && <p>Please enter some message</p>}
                                    <label htmlFor='floatingTextarea'>Message</label>
                                </div>
                            </div>
                        </div>
                        <div className='form-submit-container text-end mt-4'>
                            <input
                                style={{ backgroundColor: "#0A2343", color: "white" }}
                                className='btn p-3 contact-submit-btn'
                                type='submit'
                                value={loading ? `SENDING...` : `SEND MESSAGE`}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm