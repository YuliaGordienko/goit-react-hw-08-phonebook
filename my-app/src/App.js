import { lazy, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "Components/AppBar/AppBar";
// import RegisterView from "Components/RegisterView/RegisterView";
// import LoginView from "Components/LoginView/LoginView";
// import PhoneBook from "Components/PhoneBook/PhoneBook";
// import HomeView from "Components/HomeView/HomeView";
import { Switch } from "react-router-dom";
import authOperations from "./Redux/Auth/auth-operations";
import PrivateRoute from "Components/PrivateRoute";
import PublicRoute from "Components/PublicRoute";
import authSelectors from "Redux/Auth/auth-selectors";
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
          <Suspense fallback={<p>Please, wait, loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted>
              <LoginView />
            </PublicRoute>
            {/* <Route path="/register" component={RegisterView} />
        <Route path="/logIn" component={LoginView} /> */}
            {/* <Route path="/phoneBook" component={PhoneBook} /> */}
            <PrivateRoute path="/phoneBook">
              <PhoneBook />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </div>
    )
  );
}
