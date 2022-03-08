import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/contacts/auth/auth-operations";
import { useEffect } from "react";
import { Container } from "./components/styled/Container.styled";

const Contacts = lazy(() => import("./components/Contacts"));
const SignUp = lazy(() => import("./components/auth/SignUp"));
const Login = lazy(() => import("./components/auth/Login"));
const Home = lazy(() => import("./components/Home"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Toaster />
      <Navigation />
      <Suspense fallback="Загружаем...">
        <Routes>
          <Route path="/" element={<Home />} />
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
    </Container>
  );
}
