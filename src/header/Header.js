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
            <div className='banner row'>
                <div className='col-auto col-md-4'>
                    <a href="https://askmeg.ai">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                    <strong id="website-title">
                        askmeg.ai
                    </strong>
                </div>
                <div className='title col-md-4'>
                    <span className="title-text">
                        Team Meg
                    </span>
                </div>
                <div className='log-in-menu col-auto col-md-4'>
                    <div className='log-in-menu-toggle'>
                        <span className='accounts'>
                            <AccountModals/>
                        </span>
                        <div className="menu-toggle" id="menu-toggle" role="button" tabindex="0">
                            <div className="hamburger"></div>
                            <div className="hamburger"></div>
                            <div className="hamburger"></div>
                        </div>
                    </div>
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