import { replace } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = localStorage.getItem("token");
  return getTokenFromLocalStorage !== undefined && getTokenFromLocalStorage !== null ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
