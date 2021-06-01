import React, { Component, lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense
          fallback={
            <Spinner
              animation="border"
              variant="secondary"
              className="spinner"
            />
          }
        >
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />

            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginPage}
            />

            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterPage}
            />

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
}
const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
