import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BigFooter from "./BigFooter";
import SmallFooter from "./SmallFooter";

const Footer = () => {
  const location = useLocation().pathname;
  const [withNav, setWithNav] = useState(true);

  useEffect(() => {
    if (location === "/portal/courses") {
      setWithNav(false);
    } else if (location === "/portal/dashboard") {
      setWithNav(false);
    } else if (location === "/portal") {
      setWithNav(false);
    } else if (location === "/portal/university") {
      setWithNav(false);
    } else if (location === "/portal/profile") {
      setWithNav(false);
    } else if (location === "/portal/document") {
      setWithNav(false);
    } else if (location === "/portal/processing") {
      setWithNav(false);
    } else if (location === "/portal/setting") {
      setWithNav(false);
    }
    else if (location === "/PortalAgent/dashboard") {
      setWithNav(false);
    } else if (location === "/PortalAgent") {
      setWithNav(false);
    } else if (location === "/PortalAgent/studentList") {
      setWithNav(false);
    } else if (location === "/PortalAgent/addStudent") {
      setWithNav(false);
    }
    else if (location === "/PortalAgent/setting") {
      setWithNav(false);
    }else {
      setWithNav(true);
    }
  });

  return <>{withNav ? <BigFooter /> : <></>}</>;
};

export default Footer;
