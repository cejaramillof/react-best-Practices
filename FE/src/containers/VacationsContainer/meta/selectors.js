import { initialState } from './reducer';
/**
 * Get Vacations
 * @param state
 * @returns {Object}
 */
export const select = state => state.vacations || initialState;
export const selectVacations = state => select(state).vacations;
export const getDiscounts = state => ({ list: select(state).discounts, show: select(state).showDiscounts });
