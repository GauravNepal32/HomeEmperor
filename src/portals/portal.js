import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import PortalLeft from "./portalLeft";
import PortalRight from "./portalRight";


const Portal = () => {
  return (
    <div className='main-container p-0 container-fluid'>
      <div className='portal-container d-flex position-relative flex-column p-0 container-fluid'>
        <div className='portal-container-left order-1 w-100 order-md-0 d-block'>
          <PortalLeft />
        </div>
        <div className='portal-container-right order-0 order-md-1'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Portal;