import React from "react";
import { Outlet } from "react-router-dom";
import PortalLeftAgent from "./portalLeftAgent";

const PortalAgent = () => {
  const userData = JSON.parse(sessionStorage.getItem("token"));
  return (
    <div className='main-container p-0 container-fluid'>
      <div className='portal-container d-flex position-relative flex-column p-0 container-fluid'>
        <div className='portal-container-left order-1 w-100 order-md-0 d-block'>
          <PortalLeftAgent />
        </div>
        <div className='portal-container-right order-0 order-md-1'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PortalAgent;
