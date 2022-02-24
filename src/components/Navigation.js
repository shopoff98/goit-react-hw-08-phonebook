import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./auth/UserMenu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
          {/* <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography> */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
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
            </NavLink>
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
