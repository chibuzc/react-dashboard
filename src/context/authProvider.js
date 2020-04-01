import React from "react";
import { AuthService } from "../services/authService";

const AuthContext = React.createContext();

const AuthProvider = (props) => {


  //run this function immediately;
  //probably using the hook that replaces componentDidMount
  //useEffect
 
  const user = AuthService.getUser();
  console.log('user in authProvider', user);

  const login =  () => AuthService.login();
  const register =  () => AuthService.register();
  const logout =  () => AuthService.logout();

  return <AuthContext.Provider value={{ user, login, register, logout }} {...props} />;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
