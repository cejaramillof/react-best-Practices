import React, {useState, useCallback} from 'react';

const DeleteWarning = ({ children }) => {

    const [warning, setWarning] = useState({ visible: false, count: 0 });

    const showWarning = () => {
        setWarning({visible: true, count: warning.count + 1});
    };
    const hideWarning = () => {
        setWarning({...warning, visible: true});
    };

    const WarningComponent = () => <div>WARNING</div>;

    return children({ warning, showWarning, hideWarning, WarningComponent });
};

const DeleteButton = () => {
    return (
        <DeleteWarning>
            {({ warning, showWarning, hideWarning, WarningComponent }) =>
                <div onMouseEnter={showWarning} onMouseLeave={hideWarning}>
                    {warning && warning.visible && WarningComponent}
                    <div>Click on this button to DELETE</div>
                    <button>Delete Row</button>
                </div>
            }
        </DeleteWarning>
    )
};

const DeleteIcon = () => {
    return (
        <DeleteWarning>
            {({ warning, showWarning, hideWarning, WarningComponent }) =>
                <div onMouseEnter={showWarning} onMouseLeave={hideWarning}>
                    {warning && warning.visible && WarningComponent}
                    Icon
                </div>
            }
        </DeleteWarning>
    )
};
