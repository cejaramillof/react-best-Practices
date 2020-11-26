import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ path, component, exact, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Route exact={exact} path={path} component={component} />
  }
  return <Redirect to="/login" />
};

PrivateRoute.prototype = {
  path: PropTypes.string,
  component: PropTypes.object,
  exact: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

export default PrivateRoute;