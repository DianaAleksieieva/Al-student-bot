import React, { useState } from 'react';

import './App.css';
import Dashboard from './Dashboard/Dashboard';
import LogIn from './LogIn/LogIn';
import Header from './Header/Header';
import ChatBot from './ChatBot/ChatBot';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };
  return (
    <div className="App">
      <header className="App-header">
      <Header isLoggedIn={isLoggedIn}></Header> </header>
      <Routes>
        <Route path="/" element={<LogIn onLoginToggle={handleLoginToggle} isLoggedIn={isLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
        
    </div>
  );
}

export default App;
