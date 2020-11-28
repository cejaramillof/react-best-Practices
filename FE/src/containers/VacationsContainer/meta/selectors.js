import { initialState } from './reducer';
import { createSelector } from 'reselect';
/**
 * Get Vacations
 * @param state
 * @returns {Object}
 */
export const select = state => state.vacations || initialState;


export const selectVacationsLog = state => {
  const vacations = select(state).vacations;
  console.log('Hello selectVacations each-render');
  return vacations.map(vacation => ({ ...vacation, price: vacation.price + 10 }))
}

export const selectVacations = state => select(state).vacations;

export const makeSelectVacations = createSelector(selectVacations, vacations => {
  console.log('Hello selectVacations only when vacations change');
  return vacations.map(vacation => ({ ...vacation, price: vacation.price + 10 }))
});

export const selectDiscounts = state => select(state).discounts;
export const selectShowDiscounts = state => select(state).showDiscounts;
