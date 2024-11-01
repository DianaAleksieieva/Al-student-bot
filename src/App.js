import React from 'react';

import './App.css';
import Dashboard from './Dashboard/Dashboard';
import LogIn from './LogIn/LogIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <LogIn></LogIn>
        <Dashboard></Dashboard>
        
      </header>
    </div>
  );
}

export default App;
