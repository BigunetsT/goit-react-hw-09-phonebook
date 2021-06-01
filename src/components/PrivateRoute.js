import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string,
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(PrivateRoute);
