import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";
import authSelectors from "Redux/Auth/auth-selectors";
export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <div className={s.home}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/phoneBook"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Phonebook
          </NavLink>
        )}
      </div>
    </nav>
  );
}
