// React
import React from 'react';

// Nextjs
import { Provider } from 'next-auth/client';

// HOCs
import AuthProvider from 'hoc/auth-provider';

// Contexts
import SnackbarProvider from 'contexts/snackbar/SnackbarContext';
import Snackbar from 'contexts/snackbar/Snackbar';

// Material UI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Containers
import AuthOverlay from 'containers/AuthOverlay';

// Styles
import 'styles/globals.scss';
import theme from 'theme';

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Provider session={pageProps.session}>
                <AuthProvider authOverlay={<AuthOverlay />}>
                    <SnackbarProvider>
                        <ThemeProvider theme={theme}>
                            <Snackbar />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </SnackbarProvider>
                </AuthProvider>
            </Provider>
        </React.Fragment>
    );
}

export default MyApp;
