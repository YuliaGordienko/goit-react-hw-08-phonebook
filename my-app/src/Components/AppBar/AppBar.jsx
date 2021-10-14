import { useSelector } from "react-redux";
import HomePage from "Components/HomePage/HomePage";
import UserMenu from "Components/UserMenu/UserMenu";
import authSelectors from "Redux/Auth/auth-selectors";
import AuthNav from "Components/AuthNav/AuthNav";
import s from "./AppBar.module.css";
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.wrap}>
      <HomePage />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
