import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../Redux/Auth/auth-selectors";
export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLogedin = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLogedin && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/phoneBook" /> : children}
    </Route>
  );
}
