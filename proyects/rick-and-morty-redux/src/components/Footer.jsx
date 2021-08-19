import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer_made">
            Made with
            {" "}
            <span role="img" aria-label="heart">corazón</span>
            {" "}
            by
            <a
                href="https://www.linkedin.com/in/carlos-abarca-calderon-716432148/"
                rel="noopener noreferrer"
                target="_blank"
                className="logo"
            >
                <span className="logo-img">&lt;&gt;</span>
                {" "}
                <span>Carlos Abarca</span>
            </a>
        </div>
        <div className="footer__location">
            CH,
            <span>Santiago</span>
            ,2021
        </div>
    </footer>
);

export default Footer;