import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Container } from "./components/styled/Container.styled";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/contacts/auth/auth-operations";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SignUp = lazy(() => import("./components/auth/SignUp"));
const Login = lazy(() => import("./components/auth/Login"));
const Contacts = lazy(() => import("./components/Contacts"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    // <Container>
    <>
      <Toaster />
      <Navigation />
      <Suspense fallback="Загружаем...">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Contacts /> : <Login />} />
          <Route path="/register" element={<PublicRoute restricted={true} />}>
            <Route path="/register" element={<SignUp />} />
          </Route>
          <Route path="/login" element={<PublicRoute restricted={true} />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/contacts" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
    // </Container>
  );
}
