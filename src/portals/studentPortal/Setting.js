import { useEffect, useState } from "react";
import profileImg from "../../images/portal/profileImg.webp";
import PasswordChecklist from "react-password-checklist";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Setting = () => {
  const userData = JSON.parse(sessionStorage.getItem("token"));
  const auth = useAuth();
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [editInfo, setEditInfo] = useState(true);
  const [visibleIcon, setVisibleIcon] = useState("visibility");
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [changePassSuccess, setChangePassSuccess] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const userID = userData.id;
  const userToken = userData.token;

  const showToastMessage = () => {
    toast.success("Password Changed Successfully !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  useEffect(() => {});

  const changePassURL =
    "https://elscript.co/github/emperor-backend/api/change-password/" + userID;

  const navigate = useNavigate();

  const changePassword = async (
    current_password,
    new_password,
    new_password_confirmation
  ) => {
    try {
      const response = await axios.post(
        changePassURL,
        {
          current_password,
          new_password,
          new_password_confirmation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data.statusCode === 200) {
        console.log("Password Changed Successfully");
        showToastMessage();
      } else if (response.data.statusCode === 401) {
        setInvalidPass(true);
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

  const submitHandle = () => {};
  const handlePasswordChange = (e) => {
    e.preventDefault();
    const current_password = document.getElementById("oldPassword").value;
    const new_password = document.getElementById("newPassword").value;
    const new_password_confirmation =
      document.getElementById("newPasswordConfirm").value;
    changePassword(current_password, new_password, new_password_confirmation);
  };
  return (
    <div className='main-contianer container my-5 px-md-5'>
      <ToastContainer />
      <div className='row justify-content-between'>
        <div className='logout-container'>
          <button
            className='btn'
            onClick={() => {
              auth.logout();
              navigate("/HomeEmperor", { replace: true });
            }}>
            Logout
          </button>
        </div>
        <div className='col-md-7 perosnal-info-wrapper p-3 col-12'>
          <h3>Personal Information</h3>
          <div className='profile-info-container mt-5'>
            <div className='profile-image-container'>
              <img className='img-fluid' src={profileImg} alt='' />
            </div>
            <div className='text-info-container mt-2'>
              <div className='row row-cols-sm-2 row-cols-1'>
                <div className='col'>
                  <label htmlFor='firstName'>First Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder={userData.name}
                    disabled={editInfo}
                  />
                </div>
                <div className='col'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder={userData.name}
                    disabled={editInfo}
                  />
                </div>
              </div>
              <div className='row mt-3 row-cols-sm-2 row-cols-1'>
                <div className='col'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder={userData.phone}
                    disabled={editInfo}
                  />
                </div>
                <div className='col'>
                  <label htmlFor='lastName'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder={userData.email}
                    disabled={editInfo}
                  />
                </div>
              </div>
              <div className='row mt-3'>
                <div className='text-end'>
                  {editInfo ? (
                    <button
                      className='btn btn-type-2'
                      onClick={() => {
                        setEditInfo(!editInfo);
                      }}>
                      Edit
                    </button>
                  ) : (
                    <button
                      className='btn btn-type-2'
                      onClick={() => {
                        setEditInfo(!editInfo);
                        submitHandle();
                      }}>
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' col-md-4 col-12 my-md-0 my-5 change-pass-container p-3'>
          <h3>Change Password</h3>
          <form className='mt-5' action=''>
            <div className='d-flex password-container'>
              <input
                className='form-control p-2 mb-3'
                placeholder='Old Password'
                id='oldPassword'
                type={visibility ? "text" : "password"}
                onClick={() => {
                  setInvalidPass(false);
                }}
              />
              <button onClick={visiblePassword} className='btn'>
                <span className='material-symbols-outlined'>{visibleIcon}</span>
              </button>
            </div>
            {invalidPass && (
              <div className='invalid-oldPass text-danger'>
                Invalid Old Password
              </div>
            )}

            <div className='d-flex password-container'>
              <input
                className='form-control p-2 mb-3'
                placeholder='New Password'
                onClick={openCheckContainer}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id='newPassword'
                type={visibility ? "text" : "password"}
              />
              <button onClick={visiblePassword} className='btn'>
                <span className='material-symbols-outlined'>{visibleIcon}</span>
              </button>
            </div>
            <div className='d-flex password-container'>
              <input
                className='form-control p-2 mb-3'
                placeholder='Confirm Password'
                onClick={openCheckContainer}
                onChange={(e) => {
                  setPasswordAgain(e.target.value);
                }}
                id='newPasswordConfirm'
                type={visibility ? "text" : "password"}
              />
              <button onClick={visiblePassword} className='btn'>
                <span className='material-symbols-outlined'>{visibleIcon}</span>
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
            <div className='text-center mb-3'>
              <input
                type='submit'
                onClick={handlePasswordChange}
                className='btn btn-type-2'
                value='Change'
                disabled={enableSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
