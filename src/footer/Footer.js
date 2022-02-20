import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { scrollTop } from '../Helpers.js';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaVimeoSquare } from 'react-icons/fa';
import MediaQuery from 'react-responsive';

function Footer() {
  return (
    <div className="footer">
        <hr/>
        <nav>
            <div className="menu-footer-menu-container">
                <ul id="menu-footer-menu">
                    <MediaQuery minWidth={768}>
                        <li>
                            <Link to="/about" onClick={scrollTop}>
                                About Us
                            </Link>
                        </li>
                    </MediaQuery>
                    <li className='media-logo'>
                        <FaFacebookSquare size='30px' href="http://www.facebook.com"/>
                    </li>
                    <li className='media-logo'>
                        <FaLinkedin size='30px' href="http://www.linkedin.com"/>
                    </li>
                    <li className='media-logo'>
                        <FaTwitterSquare size='30px' href="http://www.twitter.com"/>
                    </li>
                    <li className='media-logo'>
                        <FaVimeoSquare size='30px' href="http://www.vimeo.com"/>
                    </li>
                </ul>
            </div>
        </nav>
        <br/>
        <div className="site-info-text">
            <Link to='/terms-of-use' onClick={scrollTop}>Terms of Use</Link> | <Link to='/privacy-policy'>Privacy Policy</Link><br/>
            © 2021 Tonbridgehealth LLC
        </div>
    </div>
  );
}

export default Footer;