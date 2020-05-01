import React, { Component } from 'react';
import logo from '../meglogo.png'
import './Header.css';
import Navbar from './navbar/Navbar.js';
import AccountModals from './accountModals/AccountModals.js';
import MobileHeader from './mobileHeader/MobileHeader';
import MediaQuery from 'react-responsive';
import SideMenu from './mobileHeader/sideMenu/SideMenu';
  

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
            <MediaQuery maxWidth={767}>
                <MobileHeader/>
            </MediaQuery>
            <MediaQuery minWidth={768}>
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
                            <SideMenu/>
                        </div>
                    </div>
                </div>
                <Navbar />
            </MediaQuery>
        </div>
      );
    }
}

Header.propTypes = {

};

export default Header;