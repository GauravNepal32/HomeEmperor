import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const userData = JSON.parse(sessionStorage.getItem("token"));
  console.log(userData);
  if (userData == null) {
    return <Navigate to='/login' />;
  }
  return children;
};
