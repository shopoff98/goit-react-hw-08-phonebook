import { useState } from "react";
import {
  useLoginUserMutation,
  useGetCurrentUserQuery,
} from "../../redux/contacts/contacts-reducer";
import { contactsApi } from "../../redux/contacts/contacts-reducer";
import { useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { data }] = useLoginUserMutation();
  const { datf } = useGetCurrentUserQuery();
  console.log(datf);

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
    loginUser({
      email,
      password,
    });
    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>SignUp</h3>
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
