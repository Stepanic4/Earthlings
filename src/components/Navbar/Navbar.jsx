import React from 'react';
import stl from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={stl.nav}>
          <ul className={`${stl.item} ${stl.active}`}>
              <li>Profile</li>
              <li>Friends</li>npm star
              <li>Music</li>
              <li>Photo</li>
          </ul>
      </nav>
  );
};

export default Navbar;