import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth";
import { Helmet } from "react-helmet";

const LOGIN_URL = "https://elscript.co/github/emperor-backend/api/login";
const Login = () => {
  // Password visibility toggler
  const [visibleIcon, setVisibleIcon] = useState("visibility");
  const [visibility, setVisibility] = useState(false);
  const [loadBtn, setLoadBtn] = useState(false);
  const visiblePassword = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
    if (visibleIcon === "visibility") {
      // Changing visiblity state
      setVisibleIcon("visibility_off");
    } else {
      // Changing visiblity state
      setVisibleIcon("visibility");
    }
  };
  //   Login Authentication
  const userRef = useRef();
  const errRef = useRef();

// Inital state
  const [userID, setUserID] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   toast.success("Registered Successfully. Please Login !", {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //   });
  // },[])

  // controable input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // setting error message on state change of userID and password
  useEffect(() => {
    setErrMsg("");
  }, [userID, pwd]);


// Submit function for login
  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Setting loading to wait for api response
      setLoadBtn(true)
      // calling post api for login
      const response = await axios.post(
        LOGIN_URL,
        { email: userID, password: pwd },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.statusCode === 200) {
        // if logged in successfully call auth with user details
        auth.login(response.data.data);
        // store the user token
        sessionStorage.setItem("token", JSON.stringify(response.data.data));
        // After login rediret user to portal
        navigate("/portalSelection", { replace: true });
        setUserID("");
        setPwd("");
        setLoadBtn(false)
      }
      if (response.data.statusCode === 401) {
        // if error displaying error message
        setErrMsg("Invalid Username/Password");
        setLoadBtn(false)
      }
    } catch (response) {
      setLoadBtn(false)
      if (!response) {
        setErrMsg("No Server Response");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className='main-container'>
      <Helmet>
        <title>
          Sign In | Emperor Education Network
        </title>
      </Helmet>
      <div id='login-container' className='login-container'>
        <div className='container-fluid '>
          <div className='row d-flex px-0'>
            <div className='col-sm-8 '>
              <div className='d-flex flex-column justify-content-center'>
                <div className='container mt-5 p-sm-5 p-0 py-2'>
                  <h1 className='fw-bold text-center'>Sign In to Emperor</h1>
                  <form
                    onSubmit={HandleSubmit}
                    action=''
                    className='login-form mx-auto mt-5'>
                    <input
                      className='form-control login-input p-2 mb-3'
                      placeholder='Email'
                      type='email'
                      id='loginID'
                      ref={userRef}
                      autoComplete='off'
                      onChange={(e) => {
                        setUserID(e.target.value);
                      }}
                      value={userID}
                      required
                    />
                    <div className='d-flex password-container'>
                      <input
                        className='form-control login-input p-2 mb-3'
                        placeholder='Password'
                        id='loginPassword'
                        onChange={(e) => {
                          setPwd(e.target.value);
                        }}
                        type={visibility ? "text" : "password"}
                        required
                      />
                      {/* Passowrd Visible Toogler */}
                      <button onClick={visiblePassword} className='btn'>
                        <span className='material-symbols-outlined'>
                          {visibleIcon}
                        </span>
                      </button>
                    </div>
                    <div className='mb-2'>
                      <input
                        type='checkbox'
                        className='me-3'
                        name='rememberLogin'
                        id='rememberLogin'
                      />
                      <label htmlFor='rememberLogin'>Remember me</label>
                    </div>
                    {/* Error message container */}
                    <p
                      ref={errRef}
                      className={errMsg ? "errMsg" : "offscreen"}
                      aria-live='assertive'>
                      {errMsg}
                    </p>
                    <div className='text-center mb-3'>
                      {loadBtn ? <button className="btn btn-type-2 px-5" type="button" disabled>
                        <span className="spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
                        Loading...
                      </button> : <input
                        type='submit'
                        className='btn btn-type-2 px-5'
                        value='SIGN IN'
                      />}

                    </div>
                    {/* Reset password Redirect container */}
                    <div className="text-center">
                      <Link to="/resetPassword" className='text-center text-decoration-underline login-problem'>
                      Having trouble to Log In?
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Signup Redirect container */}
            <div className='col-sm-4 p-0'>
              <div
                id='open-signup'
                className='need-signup-container d-flex align-items-center  p-sm-0 p-3 py-5  justify-content-center h-100'>
                <div className='need-signup-child text-white'>
                  <h1 className='text-center fw-bold'>New HERE?</h1>
                  <p className='text-center'>
                    Sign up and discover a great opportunites !!!{" "}
                  </p>
                  <div className='text-center mt-sm-5 mt-3'>
                    <Link to='/signup' className='sign-up-btn px-5 btn'>
                      SIGN UP
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
