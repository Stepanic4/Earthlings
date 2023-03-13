import React from 'react';
import stl from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={stl.nav}>
              <div className={`${stl.item} ${stl.active}`}>
                  <a href="/Profile">Profile</a>
              </div>
              <div className={stl.item}>
                  <a href="/Friends">Friends</a>
              </div>
              <div className={stl.item}>
                  <a href="/Music">Music</a>
              </div>
              <div className={stl.item}>
                  <a href="/Photo">Photo</a>
              </div>

      </nav>
  );
};

export default Navbar;