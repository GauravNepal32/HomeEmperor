import React from 'react'

const RestPassword = () => {
    return (
        <div className='main-container container px-md-5'>
            <div className="reset-password-container rounded my-5 mx-auto d-flex align-items-center">
                <div className="container p-md-3 my-auto">
                    <h4 className='text-center fw-bold'>Forgot Password?</h4>
                    <p className='text-center'>Enter your email address.</p>
                    <div class="form-floating my-3 mt-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className=" text-center mt-4">
                        <input type="submit" className='btn btn-type-2 w-100' value={"SUBMIT"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestPassword