import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import { getVacations, updateShowDiscounts, updateSelectedVacation } from "./meta/actions";
import { makeSelectVacations, selectDiscounts, selectSelectedVacation, selectShowDiscounts } from "./meta/selectors";

const mapStateToProps = state => ({
    // vacations: selectVacations(state),
    // vacations: selectVacationsLog(state),
    vacations: makeSelectVacations(state),
    discounts: selectDiscounts(state),
    showDiscounts: selectShowDiscounts(state),
    selectedVacation: selectSelectedVacation(state),
});

const mapDispatchToProps = ({
    getVacations,
    updateShowDiscounts,
    updateSelectedVacation,
    // dispatchVacation: (vacationId) => dispatch(updateSelectedVacation(vacationId)),
});

const VacationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vacations);

export default VacationsContainer;
