import { initialState } from './reducer';
/**
 * Get Profile
 * @param state
 * @returns {Object}
 */
export const selectProfile = state => state.profile || initialState;
export const selectUser = state => selectProfile(state).user;
export const selectOrders = state => selectProfile(state).orders;
