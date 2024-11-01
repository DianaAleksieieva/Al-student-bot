import React from 'react';

import './LogIn.css';


function LogIn() {
  return (
    <div className="LogIn">
      <div className="loginText">
        <h1>Empower Your <br /> Academic Journey</h1>
        <p>Navigate your college experience with ease. Access personalized services, track milestones, and unlock opportunities tailored just for you.</p>
      </div>
      <div className="buttons">
        <button>Login</button>
        <button>Sign In</button>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>24/7 Support</h2>
          <p>Get instant answers to your questions anytime. Our AI assistant is always ready to help.</p>
        </div>
        <div className="card">
          <h2>Personalized Guidance</h2>
          <p>Receive tailored advice based on your profile and chat history. Get relevant suggestions for your unique journey.</p>
        </div>
        <div className="card">
          <h2>Smart Recommendations</h2>
          <p>Discover events and opportunities you might have missed. Let AI enhance your college experience.</p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
