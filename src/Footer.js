import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BigFooter from "./BigFooter";
import SmallFooter from "./SmallFooter";

const Footer = () => {
  const location = useLocation().pathname;
  const [withNav, setWithNav] = useState(true);

  useEffect(() => {
if(location.substring(1,7)==="portal"){
      setWithNav(false)
    }
     else if(location.substring(1,12)==="PortalAgent"){
      setWithNav(false)
    }
    else if(location.substring(1,15)==="PortalSubAgent"){
      setWithNav(false)
    }
    else {
      setWithNav(true);
    }
  });

  return <>{withNav ? <BigFooter /> : <></>}</>;
};

export default Footer;
