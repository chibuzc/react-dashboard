import React from 'react';
import './App.css';
import {useUser} from './context/userProvider'

function App() {

  const user = useUser();
  console.log('user in app', user);

  return (
    <div>
      <h2>TESTING THE MIC</h2>
    </div>
  );
}

export default App;
