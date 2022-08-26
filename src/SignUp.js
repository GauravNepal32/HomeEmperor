import React, { useState, useRef } from "react";
import PasswordChecklist from "react-password-checklist";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [visibleIcon, setVisibleIcon] = useState("visibility");
  const [visibility, setVisibility] = useState(false);
  const [passwordAgain, setPasswordAgain] = useState("");
  const registerURL = "https://elscript.co/github/emperor-backend/api/register";
  const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();
  const navigate = useNavigate();

  // Displaying toast message
  const showToastMessage = () => {
    toast.success("You have registered successfully !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  // Register new student
  const registerStudent = async (
    studentFullName,
    studentEmail,
    studentPhone,
    studentPassword
  ) => {
    try {
      // sending request to url
      const response = await axios.post(
        registerURL,
        {
          name: studentFullName,
          email: studentEmail,
          phone: studentPhone,
          password: studentPassword,
          password_confirmation: studentPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.statusCode === 200) {
        showToastMessage();
        setTimeout(()=>{navigate("/login")},1000)
      } else if (response.data.statusCode === 401) {
        setErrMsg(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const visiblePassword = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
    if (visibleIcon === "visibility") {
      setVisibleIcon("visibility_off");
    } else {
      setVisibleIcon("visibility");
    }
  };

  const [enableSubmit, setEnableSubmit] = useState(false);
  const openCheckContainer = () => {
    document.getElementById("password-check-container").style.display = "block";
  };

  const enableButton = (isValid) => {
    if (!isValid) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  function validatePhoneNumber(input_str) {
    var Phonere = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return Phonere.test(input_str);
  }
  function validateEmail(input_str) {
    var Emailre =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Emailre.test(input_str);
  }
  const handleSubmit = (e) => {
    var validEmail = false;
    var validPhone = false;
    var validAgreement = false;
    var validFname = false;
    e.preventDefault();
    if (!document.getElementById("agreementTC").checked) {
      document.getElementById("error-agreement").style.display = "block";
      validAgreement = false;
    } else {
      document.getElementById("error-agreement").style.display = "none";
      validAgreement = true;
    }
    const registerPhone = document.getElementById("registeredPhone").value;
    if (!validatePhoneNumber(registerPhone)) {
      document.getElementById("error-phone").style.display = "block";
      document.getElementById("registeredPhone").classList.add("border-danger");
      validPhone = false;
    } else {
      document.getElementById("error-phone").style.display = "none";
      document
        .getElementById("registeredPhone")
        .classList.remove("border-danger");
      validPhone = true;
    }

    const registerEmail = document.getElementById("registeredEmail").value;
    if (!validateEmail(registerEmail)) {
      validEmail = false;
      document.getElementById("error-email").style.display = "block";
      document.getElementById("registeredEmail").classList.add("border-danger");
    } else {
      validEmail = true;
      document.getElementById("error-email").style.display = "none";
      document
        .getElementById("registeredEmail")
        .classList.remove("border-danger");
    }

    if (document.getElementById("studentFname").value.length > 1) {
      document.getElementById("error-Fname").style.display = "none";
      document.getElementById("studentFname").classList.remove("border-danger");
      validFname = true;
    } else {
      document.getElementById("error-Fname").style.display = "block";
      document.getElementById("studentFname").classList.add("border-danger");
      validFname = false;
    }

    if (validEmail && validAgreement && validPhone && validFname) {
      const studentFullName = document.getElementById("studentFname").value;
      const studentEmail = document.getElementById("registeredEmail").value;
      const studentPhone = document.getElementById("registeredPhone").value;
      const studentPassword = document.getElementById("signupPassword").value;
      registerStudent(
        studentFullName,
        studentEmail,
        studentPhone,
        studentPassword
      );
    }
  };
  return (
    <div>
      <div id='signup-container' className='login-container'>
        <Helmet>
          <title>
            Sign Up | Emperor Education Network
          </title>
        </Helmet>
        <div className='container-fluid'>
          <ToastContainer />
          <div className='row d-flex px-0'>
            <div className='col-sm-8 order-1'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='container mt-5 p-sm-5 p-0 py-3'>
                  <h1 className='fw-bold text-center'>Sign Up to Emperor</h1>
                  <form
                    action=''
                    id='signupForm'
                    className='login-form mx-auto mt-5'>
                    <div className='row g-1 mb-3'>
                      <div className='col'>
                        <input
                          id='studentFname'
                          type='text'
                          className='form-control login-input p-2'
                          placeholder='Full name'
                          aria-label='First name'
                          required
                        />
                        <div
                          id='error-Fname'
                          className='error error-phone text-danger'>
                          <p>Please enter a valid Name</p>
                        </div>
                      </div>
                    </div>
                    <input
                      className='form-control login-input p-2 mb-3'
                      placeholder='Email'
                      type='email'
                      id='registeredEmail'
                    />
                    <div
                      id='error-email'
                      className='error error-phone text-danger'>
                      <p>Please enter a valid Email</p>
                    </div>
                    <input
                      name='registeredPhone'
                      id='registeredPhone'
                      className='form-control login-input p-2 mb-3'
                      placeholder='Phone Number'
                      type='text'
                    />
                    <div
                      id='error-phone'
                      className='error error-phone text-danger'>
                      <p>Please enter a valid Phone Number</p>
                    </div>
                    <div className='d-flex password-container'>
                      <input
                        className='form-control login-input p-2 mb-3'
                        placeholder='Password'
                        onClick={openCheckContainer}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id='signupPassword'
                        type={visibility ? "text" : "password"}
                      />
                      <button onClick={visiblePassword} className='btn'>
                        <span className='material-symbols-outlined'>
                          {visibleIcon}
                        </span>
                      </button>
                    </div>
                    <div className='d-flex password-container'>
                      <input
                        className='form-control login-input p-2 mb-3'
                        placeholder='Confirm Password'
                        onClick={openCheckContainer}
                        onChange={(e) => {
                          setPasswordAgain(e.target.value);
                        }}
                        id='signupConfirmPassword'
                        type={visibility ? "text" : "password"}
                      />
                      <button onClick={visiblePassword} className='btn'>
                        <span className='material-symbols-outlined'>
                          {visibleIcon}
                        </span>
                      </button>
                    </div>
                    <div
                      id='password-check-container'
                      className='password-check-container mb-3'>
                      <div className='d-flex justify-content-center'>
                        <PasswordChecklist
                          rules={[
                            "minLength",
                            "specialChar",
                            "number",
                            "capital",
                            "match",
                          ]}
                          minLength={8}
                          value={password}
                          valueAgain={passwordAgain}
                          onChange={(isValid) => {
                            enableButton(isValid);
                          }}
                        />
                      </div>
                    </div>
                    <div className='mb-2'>
                      <input
                        type='checkbox'
                        className='me-3'
                        name='agreementTC'
                        id='agreementTC'
                      />
                      <label htmlFor='agreementTC'>
                        I agree to Terms & Conditions
                      </label>
                      <div
                        id='error-agreement'
                        className='error text-danger error-agreement'>
                        Please agree to terms and conditions to continue
                      </div>
                    </div>
                    <p
                      ref={errRef}
                      className={errMsg ? "errMsg text-center" : "offscreen"}
                      aria-live='assertive'>
                      {errMsg}
                    </p>
                    <div className='text-center mb-3'>
                      <input
                        type='submit'
                        onClick={handleSubmit}
                        className='btn btn-type-2 px-5'
                        value='SIGN UP'
                        disabled={enableSubmit}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-sm-4 order-0 p-0'>
              <div
                id='open-login'
                className='need-signup-container d-flex align-items-center p-sm-0 p-3 py-5 justify-content-center h-100'>
                <div className='need-signup-child text-white'>
                  <h1 className='text-center fw-bold'>WELCOME BACK</h1>
                  <p className='text-center'>Already a member of Emperor? </p>
                  <div className='text-center mt-sm-5 mt-3'>
                    <Link to='/login' className='sign-up-btn px-5 btn'>
                      SIGN IN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default SignUp;
