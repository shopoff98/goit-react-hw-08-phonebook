import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PublicRoute({ restricted = false }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : <Outlet />;
}
