/**
 *
 * Asynchronously loads the component for VacationPage
 *
 */

import loadable from 'utils/loadable';

export default loadable( () => import(/* webpackChunkName: "vacation" */ './index'));
