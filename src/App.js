import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Spinner } from 'react-bootstrap';

import './styles.scss';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Spinner animation="border" variant="secondary" className="spinner" />
        }
      >
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>

          <PrivateRoute
            path={routes.contacts}
            redirectTo={routes.login}
            component={ContactsPage}
          />

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
}
