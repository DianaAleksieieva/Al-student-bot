import React from 'react';

import './Dashboard.css';

function Dashboard() {
  return (
    <div className="Dashboard">
    <div className="container">
      <div className="block text-block">
        <p>Chatbots play a crucial role in helping students navigate the scholarship application process. They provide instant access to a wide range of scholarship opportunities, allowing students to find relevant financial aid quickly. By offering guidance through complex application requirements and answering common questions, chatbots reduce the stress associated with securing funding for education.

</p>
      </div>
      <div className="block">
        <div className="button-group">
          <h4>People who can help you</h4>
          <button className="button">Advisement</button>
          <button className="button">Student research</button>
          <button className="button">Career advisement</button>
          <button className="button">Financial Aid office</button>
          <button className="button">My Department</button>
        </div>
      </div>
      <div className="block">
        <div className="button-group">
        <h4>Clubs that are suggested for you</h4>
          <button className="button">Computer Programming Club</button>
          <button className="button">Digital Arts Club</button>
          <button className="button">Women In Stem Club</button>
          <button className="button">Robotics Club</button>
          <button className="button">Gym</button>
        </div>
      </div>
    </div>
    <div>
    <button className="AI-ChatBot">AI ChatBot</button>
    <p></p>
    </div>
    </div>
  );
}

export default Dashboard;
