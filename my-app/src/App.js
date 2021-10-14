import { lazy, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "Components/AppBar/AppBar";
import { Switch } from "react-router-dom";
import authOperations from "./Redux/Auth/auth-operations";
import PrivateRoute from "Components/PrivateRoute";
import PublicRoute from "Components/PublicRoute";
import authSelectors from "Redux/Auth/auth-selectors";
import Spinner from "Components/Loader/Loader";
const RegisterView = lazy(() =>
  import("./Components/RegisterView/RegisterView")
);
const LoginView = lazy(() => import("./Components/LoginView/LoginView"));
const HomeView = lazy(() => import("./Components/HomeView/HomeView"));
const PhoneBook = lazy(() => import("./Components/PhoneBook/PhoneBook"));
export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <div style={{ marginLeft: "20px" }}>
        <AppBar />
        <Switch>
          {/* <Route exact path="/" component={HomeView} /> */}
          <Suspense fallback={<Spinner />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/phoneBook">
              <PhoneBook />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </div>
    )
  );
}
