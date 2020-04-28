import React, { Component } from 'react';
import logo from '../meglogo.png'
import './Header.css';
import Navbar from './navbar/Navbar.js';
import AccountModals from './accountModals/AccountModals.js';

class Header extends Component {
    constructor(props){
        super(props) 
        this.state = {
            username: ""
        }
    }

    render(){
      return (
        <div className="header sticky">
            <div className="banner">
                <a href="https://askmeg.ai">
                    <img src={logo} className="logo" alt="logo" />
                </a>
                <strong id="website-title">
                    askmeg.ai
                </strong>
                <span className="title">
                    Team Meg
                </span>
                <span className='log-in-menu'>
                    <AccountModals/>
                </span>
                <div className="menu-toggle" id="menu-toggle" role="button" tabindex="0">
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </div>
            </div>
            <Navbar />
        </div>
      );
    }
}

Header.propTypes = {

};

export default Header;