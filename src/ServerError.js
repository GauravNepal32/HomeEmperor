import React from 'react'
import serverError from './images/error/server.png'
import { Link } from 'react-router-dom'
const ServerError = () => {
    return (
        <div className='d-flex h-100 mt-5 justify-content-center align-items-center my-auto'>
            <div className="container">
                <div className="server-error-container mx-auto mt-5 my-auto">
                    <img className='mx-auto img-fluid' src={serverError} alt="" />
                </div>
                <h3 className="text-center my-4">
                    Internal Server Error
                </h3>
                <div className="d-flex align-items-center justify-content-center">
                    <span class="material-symbols-outlined me-3">
                        arrow_back
                    </span>
                    <Link className='text-decoration-none text-black ' to="/HomeEmperor">Go to Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default ServerError