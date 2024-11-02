import React from "react";
import { Link } from 'react-router-dom';
import "./LogIn.css";

const LogIn = ({ onLoginToggle, isLoggedIn }) => {
  return (
    <div className="LogIn">
      <div>
        <h1 className="LogInH">
          Empower Your <br /> Academic Journey
        </h1>
        <p className="loginText">
          Navigate your college experience with ease. Access personalized
          services,<br /> track milestones, and unlock opportunities tailored just for
          you.
        </p>
      </div>
      <div className="buttons">
      <Link to="/dashboard">
      <button onClick={onLoginToggle}>
                Log In
            </button>
      </Link>
      <Link to="/registration">
        <button>Sign In</button>
        </Link>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>24/7 Support</h2>
          <p className="card-text">
            Get instant answers to your questions anytime. Our AI assistant is
            always ready to help.
          </p>
        </div>
        <div className="card">
          <h2>Personalized Guidance</h2>
          <p className="card-text">
            Receive tailored advice based on your profile and chat history. Get
            relevant suggestions for your unique journey.
          </p>
        </div>
        <div className="card">
          <h2>Smart Recommendations</h2>
          <p className="card-text">
            Discover events and opportunities you might have missed. Let AI
            enhance your college experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
