import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.login.email);
  const location = useLocation();
  return auth ? <Outlet /> : <Navigate to="login" state={{ from: location }} />;
};

export default PrivateRoute;
