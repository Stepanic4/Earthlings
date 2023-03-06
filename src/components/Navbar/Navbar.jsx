import React from 'react';
import stl from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={stl.nav}>
          <ul className={stl.item}>
              <li>Profile</li>
              <li>Friends</li>
              <li>Music</li>
          </ul>
      </nav>
  );
};

export default Navbar;