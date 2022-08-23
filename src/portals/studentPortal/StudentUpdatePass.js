import PasswordChecklist from "react-password-checklist";
import React,{useEffect,useState} from "react";
import axios from "axios";
const StudentUpdatePass = ({showErrorToastMessage,showToastMessage,userToken}) => {
        const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
     const [visibleIcon, setVisibleIcon] = useState("visibility");
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
     const changePassURL =
        "https://elscript.co/github/emperor-backend/api/change-password";


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
                showToastMessage();
            } else if (response.data.statusCode === 401) {
                setInvalidPass(true);
            }
        } catch (err) {
            showErrorToastMessage();
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
    const handlePasswordChange = (e) => {
        e.preventDefault();
        const current_password = document.getElementById("oldPassword").value;
        const new_password = document.getElementById("newPassword").value;
        const new_password_confirmation =
            document.getElementById("newPasswordConfirm").value;
        changePassword(current_password, new_password, new_password_confirmation);
    }

    return (
        <>
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
        </>
    );
}

export default StudentUpdatePass;