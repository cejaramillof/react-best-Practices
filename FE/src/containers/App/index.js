/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import LoginPage from "../LoginPage";
import { getAuth } from './../AuthContainer/meta/actions';

//hooks
import HomePage from "../../hooks/HomePage";
import DynamicForm from "../../hooks/DynamicForm";

function App({ auth }) {
  return (<LoginPage />);
}

App.propTypes = {
  auth: PropTypes.object,
};
const mapStatToProps = () => ({
  auth: getAuth,
})

const withConnect = connect();

export default compose(
  withConnect,
)(App);
