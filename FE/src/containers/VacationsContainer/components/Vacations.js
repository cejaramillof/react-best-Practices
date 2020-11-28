import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
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

function Vacations({ getVacations, updateShowDiscounts, vacations, discounts, showDiscounts }) {

    useEffect(() => {
        if (getVacations) {
            getVacations()
        }
    }, []);

    const classes = useStyles();

    // will break the reactMemo, because he dont make a depth compair, only compair reference
    // is better move this calculation to the selector
    // const newVacations = vacations.map(vacation => ( {...vacation, price: 100}))

    return (
        <>
            <Discounts
                updateShowDiscounts={updateShowDiscounts}
                discounts={discounts}
                showDiscounts={showDiscounts} />
            <div className={classes.vacationsRoot}>
                <VacationsItems vacations={vacations} />
            </div>
        </>
    );
}

Vacations.propTypes = {
    getVacations: PropTypes.func,
    updateShowDiscounts: PropTypes.func,
    vacations: PropTypes.array,
    discounts: PropTypes.array,
    showDiscounts: PropTypes.bool,
};

export default Vacations;
