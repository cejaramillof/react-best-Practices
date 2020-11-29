/**
 *
 * Asynchronously loads the component for LoginPage
 *
 */
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import loadable from 'utils/loadable';

export default loadable( () => import(/* webpackChunkName: "login" */ './index'), { fallback: <CircularProgress />} );
