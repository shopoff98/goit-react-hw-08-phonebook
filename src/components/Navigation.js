import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./auth/UserMenu";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import GlobalStyles from "@mui/material/GlobalStyles";
import s from "../components/styled/AppBarNavigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? s.active : s.inactive
                  }
                >
                  Home
                </NavLink>{" "}
                <NavLink
                  to="contacts"
                  className={({ isActive }) =>
                    isActive ? s.active : s.inactive
                  }
                >
                  Contacts
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="register"
                  className={({ isActive }) =>
                    isActive ? s.active : s.inactive
                  }
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? s.active : s.inactive
                  }
                >
                  Sign In{" "}
                </NavLink>
              </>
            )}
            {/* <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              Home
            </NavLink>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              Sign Up
            </NavLink>
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              Sign In{" "}
            </NavLink>
            <NavLink
              to="contacts"
              className={({ isActive }) => (isActive ? s.active : s.inactive)}
            >
              Contacts
            </NavLink> */}
          </nav>
          {isLoggedIn && <UserMenu />}
        </Toolbar>
      </AppBar>
      {/* <NavLink to="/register"> SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn && <UserMenu />} */}
    </>
  );
}
