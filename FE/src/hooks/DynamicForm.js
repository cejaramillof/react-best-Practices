import React, { useRef, useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
        margin: '30px',
    },
});

const getFieldsElements = (_fields) => {
    return _fields.map(field => <TextField
        id={field}
        label={field}
        variant="outlined"
        color="secondary"
    />)
}

const DynamicForm = ({ labels, isExtendedForm }) => {
    const classes = useStyles();

    useEffect(() => {
        console.log("welcome to the dynamic form")
    }, []);

    const [fields, setFields] = useState(labels);
    const [fieldsElements, setFieldsElements] = useState(getFieldsElements(labels));

    const handleNewField = (_fields) => {
        setFields([...fields, ''])
        // setFields(crr => [...crr, ''])
    }

    useEffect(() => {
        isExtendedForm || fields.length < 3 ?
            setFieldsElements(getFieldsElements(fields)) :
            setFieldsElements(getFieldsElements(fields.slice(0, 3)));
    }, [isExtendedForm, fields]);

    // state: { ref: React.createRef()} // class component
    const containerRef = useRef(null);

    const getHeight = () => {
        if (containerRef && containerRef.current) return containerRef.current.offsetHeight;
    }

    return (
        <>
            <div
                ref={containerRef}
                className={classes.container}>
                {fieldsElements}
                <div>{getHeight()}</div>
            </div>
            <Fab
                color="secondary"
                aria-label="add"
                // onClick={handleNewField}
                onClick={() => handleNewField(fields)}>
                <AddIcon />
            </Fab>
        </>
    );
};

DynamicForm.propTypes = {
    labels: PropTypes.array,
};

export default DynamicForm;
