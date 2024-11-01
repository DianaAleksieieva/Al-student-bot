import React from 'react';

import './App.css';
import Dashboard from './Dashboard/Dashboard';
import LogIn from './LogIn/LogIn';
import Header from './Header/Header';
import ChatBot from './ChatBot/ChatBot'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <LogIn></LogIn>
        {/* <Dashboard></Dashboard> */}
        <ChatBot></ChatBot>
      </header>
    </div>
  );
}

export default App;
