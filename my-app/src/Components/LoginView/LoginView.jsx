import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import authOperations from "../../Redux/Auth/auth-operations";
import s from "../LoginView/LoginView.module.css";
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        E-mail
        <input
          type="e-mail"
          className={s.input}
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Password
        <input
          type="text"
          className={s.input}
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button}>
        log in
      </button>
    </form>
  );
}
