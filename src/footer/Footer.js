import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { scrollTop } from '../Helpers.js';
import MediaQuery from 'react-responsive';

function Footer() {
  return (
    <div className="footer">
        <hr/>
        <MediaQuery minWidth={768}>
            <nav>
                <div className="menu-footer-menu-container">
                    <ul id="menu-footer-menu">
                        <li>
                            <Link to="/about" onClick={scrollTop}>
                                About Us
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
        </MediaQuery>
        <div className="site-info-text">
            © 2020 Tonbridgehealth LLC
        </div>
    </div>
  );
}

export default Footer;