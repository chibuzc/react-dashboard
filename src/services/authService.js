const localStorageKey = "__authToken_"
const hardCodedToken = "yyyyyyyy";
const useMockUnauthenticated = false;


export const AuthService = {
  getUser: () => { 
    if(useMockUnauthenticated){
        return null;
    }
    const token = window.localStorage.getItem(localStorageKey);
    if(token && token === hardCodedToken){
        return { username: "johnBosce", password: "xxxxxxxxxx" };
    }
    return null;
  },
  login: () => {
    const token = "yyyyyyyy";
    window.localStorage.setItem(localStorageKey, token)
    return token;
  },
  register: () => {
    const token = "yyyyyyyy";
    window.localStorage.setItem(localStorageKey, token)
    return token;
  },
  logout: () => { 
     window.localStorage.removeItem(localStorageKey); 
  },
};
