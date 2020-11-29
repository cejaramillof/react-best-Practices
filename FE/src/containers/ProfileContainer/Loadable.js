/**
 *
 * Asynchronously loads the component for ProfilePage
 *
 */

import React from 'react';
import { CircularProgress } from '@material-ui/core';
import loadable from 'utils/loadable';

export default loadable(() => import(/* webpackChunkName: "profile" */ './index'), { fallback: <CircularProgress />} );
