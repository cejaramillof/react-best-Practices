import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Vacation from "./Vacation";

const VacationsItems = ({ vacations }) => {
    console.count('VacationsItems'); 
    return (
        vacations.map(vacation => (
                <Vacation vacation={vacation} />))
    );
};

VacationsItems.propTypes = {
    vacations: PropTypes.array,
};

// Memo HoC ShallowCompair of props, like second param can recibe a function to make a full depth compare
export default memo(VacationsItems);
