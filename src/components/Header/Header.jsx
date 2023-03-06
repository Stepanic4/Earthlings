import React from 'react';
import logo from "../../logo.svg";
import stl from './Header.module.css';

const Header = () => {
    return (
        <header className={stl.header}>
            <img src={logo} className={stl.ArtLogo} alt="logo"/>
            <div>
                <h4>
                    Earthlings
                </h4>
            </div>
        </header>
    );
};

export default Header;