import React from 'react';

import './Dashboard.css';

function Dashboard() {
  return (
    <div className="container">
      <div className="block text-block">
        <p>Your text goes here</p>
      </div>
      <div className="block">
        <div className="button-group">
          <button className="button">Button 1</button>
          <button className="button">Button 2</button>
        </div>
      </div>
      <div className="block">
        <div className="button-group">
          <button className="button">Button 3</button>
          <button className="button">Button 4</button>
          <button className="button">Button 5</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
