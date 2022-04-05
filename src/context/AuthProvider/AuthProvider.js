import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const allAuthContext= useFirebase();
    // useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allAuthContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;