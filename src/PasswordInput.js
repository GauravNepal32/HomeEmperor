import React, { useState } from "react";

export default function PasswordInput({ name, setPassword, openCheckContainer, placeholder }) {
    const [isVisible, setVisible] = useState(false);
    const toggle = (e) => {
        e.preventDefault();
        setVisible(!isVisible);
    };

    return (
        <div className='d-flex password-container'>
            <input
                className='form-control login-input p-2 mb-3'
                placeholder={placeholder}
                onClick={openCheckContainer}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                id={name}
                type={isVisible ? "text" : "password"}
            />
            <button onClick={toggle} className='btn'>
                <span className='material-symbols-outlined'>
                    {isVisible ? "visibility" : "visibility_off"}
                </span>
            </button>
        </div>
    );
}