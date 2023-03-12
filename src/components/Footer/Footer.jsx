import React from 'react';
import stl from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={stl.oneFooter}>
                © 2023 Earthlings.
            </div>
            <div>
                My social auto
            </div>
        </footer>
    );
};

export default Footer;