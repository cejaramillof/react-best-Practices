import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Vacation from "./Vacation";

const VacationsItems = ({ vacations, handleVacationOnClick, updateSelectedVacation }) => {
    console.count('VacationsItems'); 
    return (
        vacations.map(vacation => (
                <Vacation vacation={vacation} handleVacationOnClick={handleVacationOnClick} updateSelectedVacation={updateSelectedVacation} />))
    );
};

VacationsItems.propTypes = {
    vacations: PropTypes.array,
    handleVacationOnClick: PropTypes.func,
    updateSelectedVacation: PropTypes.func,
};

// Memo HoC ShallowCompair of props, like second param can recibe a function to make a full depth compare
export default memo(VacationsItems);
