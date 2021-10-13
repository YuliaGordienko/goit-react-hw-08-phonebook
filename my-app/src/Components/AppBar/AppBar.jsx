import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "Components/HomePage/HomePage";
import RegisterView from "Components/RegisterView/RegisterView";
import LoginView from "Components/LoginView/LoginView";
import HomeView from "Components/HomeView/HomeView";
import UserMenu from "Components/UserMenu/UserMenu";
import authSelectors from "Redux/Auth/auth-selectors";
import AuthNav from "Components/AuthNav/AuthNav";
import s from "./AppBar.module.css";
import PhoneBook from "Components/PhoneBook/PhoneBook";
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.wrap}>
      <HomePage />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
