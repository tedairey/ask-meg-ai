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
                        <a href="https://askmeg.ai/?page_id=7">Copyright Statement</a>
                    </li>
                    <li>
                        <a href="https://askmeg.ai/?page_id=9">Disclaimer</a>
                    </li>
                    <li>
                        <a href="https://askmeg.ai/?page_id=3">Privacy Policy</a></li>
                    <li>
                        <a href="https://askmeg.ai/?page_id=63">Terms of Service</a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav>
            <div className="menu-social-menu-container">
                <ul id="menu-social-menu" className="menu">
                    <li id="menu-item-53" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-53">
                        <a href="http://www.facebook.com">Facebook</a>
                    </li>
                    <li id="menu-item-55" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-55">
                        <a href="http://www.linkedin.com">LinkedIn</a>
                    </li>
                    <li id="menu-item-56" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-56">
                        <a href="http://www.twitter.com">Twitter</a>
                    </li>
                    <li id="menu-item-57" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-57">
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