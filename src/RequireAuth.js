import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./auth";

// Check if user is login in or not
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const userData = JSON.parse(sessionStorage.getItem("token"));
  if (userData == null) {
    // If user is not logged in redirect to login
    return <Navigate to='/login' />;
  }
  // If user is logged in redirect to respective page
  return children;
};
