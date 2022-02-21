import { NavLink } from "react-router-dom";
import { useLogOutMutation } from "../redux/contacts/contacts-reducer";
export default function Navigation() {
  const [logout] = useLogOutMutation();
  return (
    <header>
      <nav>
        <NavLink to="/register"> SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
}
