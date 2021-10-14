import { useDispatch } from "react-redux";
import { useState } from "react";
import authOperations from "../../Redux/Auth/auth-operations";
import s from "./RegisterView.module.css";
export default function RegisterView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "name":
        return setName(value);
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    console.log(password);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          className={s.input}
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
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
        Sign up
      </button>
    </form>
  );
}
