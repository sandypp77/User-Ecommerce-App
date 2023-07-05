import { replace } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
  const getTokenFromLocalStorage = localStorage.getItem("token");
  return getTokenFromLocalStorage === undefined ||
    getTokenFromLocalStorage === null ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};
