import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { scrollTop } from '../Helpers.js';

function Footer() {
  return (
    <div className="footer">
        <hr/>
        <nav>
            <div className="menu-footer-menu-container">
                <ul id="menu-footer-menu" className="menu">
                    <li>
                        <Link to="/about">
                            <a href="#" onClick={scrollTop}>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <a href="http://www.facebook.com">Facebook</a>
                    </li>
                    <li>
                        <a href="http://www.linkedin.com">LinkedIn</a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com">Twitter</a>
                    </li>
                    <li>
                        <a href="http://www.vimeo.com">Vimeo</a>
                    </li>
                </ul>
            </div>
        </nav>
        <br/>
        <div className="site-info-text">
            © 2020 Tonbridgehealth LLC
        </div>
    </div>
  );
}

export default Footer;