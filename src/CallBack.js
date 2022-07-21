import React from "react";
const CallBack = () => {
    return (
        <div className="col-md-4 d-md-block d-none col-12 d-flex justify-content-end">
            <div className="h-100">
                <div className="side-callback-wrapper">
                    <div className="d-flex justify-content-end">
                        <div className="callback-request-container p-3">
                            <h6 className="text-center">Get Expert Admission Guidance</h6>
                            <p className="mt-3 text-center">Application fee waiver - Appl Assistance - upto 100% scholarship - SOP Prep</p><input className="w-100 p-2 rounded" type="text" name="callback-phone" placeholder="Mobile Number" />
                            <div className=""><button className="btn btn-type-2 mt-3 text-nowrap p-2 w-100">Request
                                callback</button></div>
                        </div>
                    </div>
                    <div className="d-flex mt-2 justify-content-end">
                        <div className="callback-online-request-container p-3">
                            <h6 className="text-center">Reach Us Online</h6>
                            <p className="mt-4 text-center ">Our team can be reached through different social network
                            </p>
                            <div className="">
                                <div className="d-lg-flex justify-content-center mt-lg-5 align-content-center">
                                    <button className="btn whatsapp-btn mt-md-0 mt-3 mx-1 p-2 d-flex align-content-between my-auto"><i
                                        className="fa-brands fa-whatsapp my-auto me-lg-3"></i>WhatsApp</button>
                                    <button className="btn messenger-btn mt-md-0 mt-3 mx-1 p-2 d-flex align-content-between my-auto"><i
                                        className="fa-brands fa-facebook-messenger my-auto me-lg-3"></i>Messenger</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallBack;
