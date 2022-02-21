import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Container } from "./components/styled/Container.styled";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";

const SignUp = lazy(() => import("./components/auth/SignUp"));
const Login = lazy(() => import("./components/auth/Login"));
const Contacts = lazy(() => import("./components/Contacts"));

export default function App() {
  return (
    <Container>
      <Toaster />
      <Navigation />
      <Suspense fallback="Загружаем...">
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
