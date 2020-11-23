import React, { useRef, useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import useInterval from './useInterval';

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
        return () => console.log("component cleanup")
    }, []);

    useEffect(() => {
        // global eventListener is bad practice
        const root = document.getElementById('root');
        root.addEventListener('keyup', (e) => {
            setKey(e.code);
        })
        return () => {
            const root = document.getElementById('root');
            root.removeEventListener('keyup');
        }
        // const customInterval = setInterval(handleNewField(fields), 3000);
    }, []);

    // const customInterval = setInterval(handleNewField(fields), 3000);
    useInterval(() => {
        setFields([...fields, '']);
    }, 3000);

    const [key, setKey] = useState('');
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
                <div>{key}</div>
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
