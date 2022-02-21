import { useState } from "react";
import { useSignUpUserMutation } from "../../redux/contacts/contacts-reducer";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signUpUser, { data }] = useSignUpUserMutation();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "userName":
        setUserName(value);
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
    signUpUser({
      name: userName,
      email,
      password,
    });
    setUserName("");
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
        UserName
        <input
          name="userName"
          type="text"
          value={userName}
          onChange={handleChange}
        />
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
      <button type="submit">SignUp</button>
    </form>
  );
}
