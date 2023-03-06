import React from 'react';
import logo from "../../logo.svg";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div>
                <h4>
                    Earthlings
                </h4>
            </div>
        </header>
    );
};

export default Header;