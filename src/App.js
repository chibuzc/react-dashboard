import React, { useEffect } from 'react';
import './App.css';
import {useUser} from './context/userProvider'
import { useAuth } from './context/authProvider';

function App() {

  useAuth().login()
  // useEffect(login , [] )

  const user = useUser();
  console.log('user in app', user);

  return (
    <div>
      <h2>TESTING THE MIC</h2>
    </div>
  );
}

export default App;
