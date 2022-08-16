import { createContext, useState, useCallback, useMemo, useContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('USER_AUTH') ?? false);

    const login = useCallback(() => {
        localStorage.setItem('USER_AUTH', true);
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('USER_AUTH');
        setIsAuthenticated(false)
    }, []);

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated,
        }), [login, logout, isAuthenticated ]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

AuthContextProvider.propTypes = {
    children: PropTypes.object
};

export function useAuthContext(){
    return useContext(AuthContext)
};