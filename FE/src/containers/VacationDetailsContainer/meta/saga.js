import { all, takeLatest, put, select } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import { selectVacations } from '../../VacationsContainer/meta/selectors';

function* handleGetVacationDetails(action) {
    try {
        // select all vacations
        const vacations = yield select(selectVacations);

        // find the specific vacation
        const vacationSelected = vacations.find(vacation => vacation.id === action.vacationId);

        // pass the vacation to the success action
        yield put(actions.getVacationDetailsSuccess(vacationSelected))
    } catch(error) {
        yield put(actions.getVacationDetailsError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_VACATIONDETAILS, handleGetVacationDetails),
    ]);
}
