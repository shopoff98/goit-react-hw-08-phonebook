import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./auth/UserMenu";
export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <header>
      <nav style={{ display: "flex" }}>
        <NavLink to="/register"> SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn && <UserMenu />}
      </nav>
    </header>
  );
}
