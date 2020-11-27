import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import { getVacations, updateShowDiscounts } from "./meta/actions";
import { selectVacations, getDiscounts } from "./meta/selectors";

const mapStateToProps = state => ({
    vacations: selectVacations(state),
    discounts: getDiscounts(state),
});

const mapDispatchToProps = ({
    getVacations,
    updateShowDiscounts,
});

const VacationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vacations);

export default VacationsContainer;
