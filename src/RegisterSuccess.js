import React from "react";
import success from "./images/emperor/success.png"
const RegisterSuccess = () => {
    return (
        <div className="main-container">
            <div class="container-fluid mx-auto my-5">
                <div class="container mx-auto">
                    <div class="col-12 d-flex justify-content-center align-content-center">
                        <div class="">
                            <div class="row d-flex justify-content-center">
                                <div class="col-sm-6 col-12 order-confirm-img-container">
                                    <img class="img-fluid" src={success} alt="" />
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center mx-auto">
                                <div class="col-12 text-center">
                                    <h4>You have registered successfully</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterSuccess;