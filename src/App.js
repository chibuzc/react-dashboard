import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import { useUser } from "./context/userProvider";
import { useAuth } from "./context/authProvider";
import ErrorBoundary from './components/errorBoundary'
const UnauthenticatedApp = React.lazy(() =>import("./components/unauthenticatedApp"));
const AuthenticatedApp = React.lazy(() =>import("./components/authenticatedApp"));

function App() {
  useAuth().login();

  // useEffect(login , [] )

  const user = useUser();
  console.log("user in app", user);

  return (
    <ErrorBoundary>
      <div>
        {/* <CheckBoxWithLabel labelOn='on' labelOff='off' /> */}
        <h2>learn react</h2>
        <h2>TESTING THE MIC</h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Suspense>
      </div>
    </ErrorBoundary> 
  );
}

// export const CheckBoxWithLabel = (props) => {
//   const [checked, setstate] = useState(false);

//   const onChange = () => {
//     setstate(!checked);
//   };

//   return (
//     <div>
//       <label>
//         <input onChange={() => onChange()} checked={checked} type="checkbox" />
//         {checked ? props.labelOn : props.labelOff}
//       </label>
//     </div>
//   );
// }

export default App;
