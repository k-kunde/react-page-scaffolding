import { createContext } from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

export const AuthContext = createContext({});

const AuthProvider = (props) => {
    return <AuthContext.Provider value={props.authOverlay}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
