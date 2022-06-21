import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        warning: {
            main: '#ff9d00',
        },
        info: {
            main: '#ff00ff',
        },
        success: {
            main: '#00ff00',
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
