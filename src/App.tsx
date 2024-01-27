import React from 'react';
import AppRouter from './AppRouter';
import {app} from '../src/firebase/firebase'

function App() {
  console.log(app);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
