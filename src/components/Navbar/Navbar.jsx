import React from 'react';
import stl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={stl.nav + ' ' + stl.active}>
            <div className={stl.item}>
                <NavLink to="Profile">Profile</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="Dialogs">Messages</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="News">News</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/Settings">Settings</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;