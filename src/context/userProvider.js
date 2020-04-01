import React from "react";
import {useAuth} from './authProvider'

const UserContext = React.createContext();

const UserProvider = (props) => {
    const user = useAuth().user;
    console.log('user in userProvider', user);
    return <UserContext.Provider value={user} {...props} />;
};

const useUser = () => {
  const context = React.useContext(UserContext);
  return context;
};

export {UserProvider, useUser}