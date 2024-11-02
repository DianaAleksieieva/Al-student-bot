import React from 'react';

import './Header.css';

function Header({ isLoggedIn }) {
 
  return (
    <div className="Header">
      <div>Student Succes</div>
      {isLoggedIn ? <div>Hi, John</div> : null}
    </div>
  );
}

export default Header;
