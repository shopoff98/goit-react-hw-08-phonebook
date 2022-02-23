import { useState } from "react";
import {
  useLoginUserMutation,
  useGetCurrentUserQuery,
} from "../../redux/contacts/contacts-reducer";
import { login } from "../../redux/contacts/auth/auth-operations";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>
        {" "}
        Email
        <input name="email" type="text" value={email} onChange={handleChange} />
      </label>
      <label>
        {" "}
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
