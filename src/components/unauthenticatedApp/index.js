import React from 'react';


const UnauthenticatedApp = () => {
    return (
        <>
            <Login />
            {/* Login */}
        </>
    )
}

export default UnauthenticatedApp

export const Login = () => {
   return <>
   <h2>LOGIN</h2>
   <input id='email' />
   <input id='password' />
   <button>LOGIN</button>
   </>
}