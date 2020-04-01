import React from 'react';
import { AuthProvider } from './authProvider';
import { UserProvider } from './userProvider';


const AppProviders = ({children}) => {
    return (
        <AuthProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </AuthProvider>
    )
}

export default AppProviders