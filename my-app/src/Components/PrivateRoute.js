import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../Redux/Auth/auth-selectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLogedin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLogedin ? children : <Redirect to="/login" />}
    </Route>
  );
}
