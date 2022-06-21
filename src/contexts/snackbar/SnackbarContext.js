import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';

export const SnackbarContext = createContext();

const initialSnackbar = {
    action: null,
    message: '',
    autoHideDuration: 5000,
    open: false,
    severity: 'info',
};

const SnackbarProvider = (props) => {
    const [snackbar, setSnackbar] = useState(initialSnackbar);
    const timeout = useRef();

    const showSnackbar = useCallback((args) => {
        setSnackbar({ ...initialSnackbar, open: true, ...args });
    }, []);

    const hideSnackbar = useCallback(
        (event, reason) => {
            let open = false;

            if (typeof snackbar.onClose === 'function') {
                const onCloseResult = snackbar.onClose(event, reason);

                // If onClose returns true, we want to hide the snackbar, when means open must be 'false', and vice versa for if onClose returns false
                if (typeof onCloseResult === 'boolean') {
                    open = !onCloseResult;
                }
            }
            setSnackbar({ ...snackbar, open });
        },
        [snackbar]
    );

    return (
        <SnackbarContext.Provider
            value={{
                hideSnackbar,
                showSnackbar,
                snackbar,
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;
