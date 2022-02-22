import { NavLink } from "react-router-dom";
import UserMenu from "./auth/UserMenu";
export default function Navigation() {
  return (
    <header>
      <nav style={{ display: "flex" }}>
        <NavLink to="/register"> SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <UserMenu />
      </nav>
    </header>
  );
}
