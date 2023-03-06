import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
      <nav className="nav">
          <ul className="item">
              <li>Profile</li>
              <li>Friends</li>
              <li>Music</li>
          </ul>
      </nav>
  );
};

export default Navbar;