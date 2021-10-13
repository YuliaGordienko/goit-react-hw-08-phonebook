import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../Redux/Auth/auth-operations";
import authSelectors from "../../Redux/Auth/auth-selectors";
import defaultAvatar from "./xqdodxc5zvrdlg0fk8.png";
import PhoneBook from "../../Components/PhoneBook/PhoneBook";
import s from "./UserMenu.module.css";
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  return (
    <>
      <div>
        <img src={avatar} alt="" width="35" height="25" />
        <span className={s.span}>Welcome, {name}</span>
        <button
          type="button"
          className={s.button}
          onClick={() => dispatch(authOperations.logOut())}
        >
          Exit
        </button>
      </div>
    </>
  );
}
