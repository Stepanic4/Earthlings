import React from 'react';
import logo from "../../logo.svg";
import stl from './Header.module.css';

const Header = () => {
    return (
        <header className={stl.header}>
            <div className={stl.outer}>
            <img src={logo} className={stl.ArtLogo} alt="logo"/>
                <p>
                    Earthlings
                </p>
            </div>
        </header>
    );
};

export default Header;