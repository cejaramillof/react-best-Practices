/**
 *
 * Asynchronously loads the component for VacationDetailPage
 *
 */

import loadable from 'utils/loadable';

export default loadable( () => import(/* webpackChunkName: "vacationDetail" */ './index'));
