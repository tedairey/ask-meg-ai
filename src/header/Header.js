import React from 'react';
import logo from '../meglogo.png'
import './Header.css';

function Header() {
  return (
    <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <strong>
            askmeg.ai
        </strong>
        <span className="title">
            Meet Meg
        </span>
        <div class="menu-toggle" id="menu-toggle" role="button" tabindex="0">
            <div class="hamburger"></div>
            <div class="hamburger"></div>
            <div class="hamburger"></div>
        </div>
    </div>
  );
}

export default Header;