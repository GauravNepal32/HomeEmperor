import PasswordChecklist from "react-password-checklist";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../auth";
import PasswordInput from "../../PasswordInput";
const StudentUpdatePass = ({ showErrorToastMessage, showToastMessage, userToken }) => {
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [visibleIcon, setVisibleIcon] = useState("visibility");
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
    const auth = useAuth();
    const changePassURL =
        `${auth.baseURL}/api/change-password`


    // Changing password function
    const changePassword = async (
        current_password,
        new_password,
        new_password_confirmation
    ) => {
        try {
            // Calling post api to update password
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
                        // Passing token
                        Authorization: `Bearer ${userToken}`,
                    },
                }
            );

            if (response.data.statusCode === 200) {
                // If success show success message
                document.getElementById('newPassword').value="";
                document.getElementById('oldPassword').value="";
                document.getElementById('newPasswordConfirm').value="";
                document.getElementById("password-check-container").style.display = "none";
                showToastMessage();
            } else if (response.data.statusCode === 401) {
                // If error show error message
                setInvalidPass(true);
            }
        } catch (err) {
            showErrorToastMessage();
            console.log(err);

        }
    };
    // Visible Password Toggler
    const visiblePassword = (e) => {
        e.preventDefault();
        setVisibility(!visibility);
        if (visibleIcon === "visibility") {
            setVisibleIcon("visibility_off");
        } else {
            setVisibleIcon("visibility");
        }
    };

    // Password check contianer
    const openCheckContainer = () => {
        document.getElementById("password-check-container").style.display = "block";
    };

    // ENable sublit only when all condtion match
    const enableButton = (isValid) => {
        if (!isValid) {
            setEnableSubmit(true);
        } else {
            setEnableSubmit(false);
        }
    };

    // Sumbit form to change password
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
                <PasswordInput placeholder={"Old Password"} name={"oldPassword"} setInvalidPass={setInvalidPass}/>

                {/* <div className='d-flex password-container'>
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
                </div> */}
                {invalidPass && (
                    <div className='invalid-oldPass text-danger'>
                        Invalid Old Password
                    </div>
                )}
                <PasswordInput placeholder={"New Password"} openCheckContainer={openCheckContainer} name={"newPassword"} setPassword={setPassword}/>
                <PasswordInput placeholder={"Confirm Password"} openCheckContainer={openCheckContainer} name={"newPasswordConfirm"} setPassword={setPasswordAgain}/>
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