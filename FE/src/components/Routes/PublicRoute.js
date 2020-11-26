import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PublicRoute = ({ path, component, exact, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return <Route exact={exact} path={path} component={component} />
};

PublicRoute.prototype = {
  path: PropTypes.string,
  component: PropTypes.object,
  exact: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

export default PublicRoute;