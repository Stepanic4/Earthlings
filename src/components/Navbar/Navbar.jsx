import React from 'react';
import stl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={stl.nav}>
            <div className={stl.item}>
                <NavLink to="Profile" activeClassName={stl.active}>Profile</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="Dialogs" activeClassName={stl.active}>Messages</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="News" activeClassName={stl.active}>News</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/Music" activeClassName={stl.active}>Music</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/Settings" activeClassName={stl.active}>Settings</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;