import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.elementType,
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string,
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(PublicRoute);
