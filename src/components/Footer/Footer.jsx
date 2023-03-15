import React from 'react';
import stl from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={stl.oneFooter}>
            <div>
                © 2023 Earthlings.
            </div>
            <div>
                My social auto
            </div>
        </footer>
    );
};

export default Footer;