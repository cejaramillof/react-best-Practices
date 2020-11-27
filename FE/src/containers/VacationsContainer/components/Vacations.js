import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import Discounts from "./Discounts";
import VacationsItems from "./VacationsItems";

const useStyles = makeStyles({
    vacationsRoot: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
    },
});

function Vacations({ getVacations, updateShowDiscounts, vacations, discounts }) {

    useEffect(() => {
        if (getVacations) {
            getVacations()
        }
    }, []);

    const classes = useStyles();

    return (
        <>
            <Discounts updateShowDiscounts={updateShowDiscounts} vacations={vacations} discounts={discounts} />
            <div className={classes.vacationsRoot}>
                <VacationsItems vacations={vacations} />
            </div>
        </>
    );
}

Vacations.propTypes = {
    getVacations: PropTypes.func,
    vacations: PropTypes.array,
};

export default Vacations;
