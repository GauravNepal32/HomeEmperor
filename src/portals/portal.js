import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import PortalLeft from "./portalLeft";
import PortalRight from "./portalRight";


const Portal = () => {


    //choose the screen size



    return (
        <div className="main-container p-0 container-fluid">
            <div className="portal-container d-md-flex p-0 container-fluid">
                <div className="portal-container-left d-block">
                    <PortalLeft />
                </div>
                <div className="portal-container-right">

                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Portal;