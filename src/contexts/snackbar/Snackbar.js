// React
import React, { useContext } from 'react';

// Material UI
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

// Contexts
import { SnackbarContext } from './SnackbarContext';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 *
 * @param { autoHideDuration, message, action, onClose } props
 *
 */
const _Snackbar = (props) => {
    const { snackbar, hideSnackbar } = useContext(SnackbarContext);

    const { onClose, message, severity, ..._snackbar } = snackbar; // Remove onClose from snackbar so it doesn't get spread and overwrite the hideSnackbar method
    const alert = { severity };

    if (onClose) {
        alert.onClose = (e) => hideSnackbar(e, 'closebutton'); // Set the 'reason' variable in the case of the alert onClose button getting clicked
    }

    return (
        <Snackbar onClose={hideSnackbar} {..._snackbar}>
            <Alert {...alert}>{message}</Alert>
        </Snackbar>
    );
};

export default _Snackbar;
