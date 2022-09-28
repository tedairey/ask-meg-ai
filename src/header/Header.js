import React, { Component } from 'react';
import logo from '../meglogo.png'
import './Header.scss';
import AccountModals from './accountModals/AccountModals.js';
import MobileHeader from './mobileHeader/MobileHeader';
import MediaQuery from 'react-responsive';
import SideMenu from './mobileHeader/sideMenu/SideMenu';
import { Link } from 'react-router-dom';
  

class Header extends Component {
    constructor(props){
        super(props) 
        this.state = {
            
        }
    }

    render(){
      return (
        <header className="header sticky">
            <MediaQuery maxWidth={767}>
                <MobileHeader/>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className='banner'>
                    <div className='logo-wrapper'>
                        <a className='header-logo' href="https://askmeg.ai">
                            <img src={logo} className="logo" alt="logo" />
                        </a>
                        <Link id="website-title" to='/meet-meg'>
                            askmeg.ai
                        </Link>
                    </div>
                    <div className='title'>
                        <span className="title-text">
                            Meet Meg
                        </span>
                    </div>
                    <div className='log-in-menu'>
                        <div className='log-in-menu-toggle'>
                            <span className='accounts'>
                                <AccountModals/>
                            </span>
                            <SideMenu/>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </header>
      );
    }
}

Header.propTypes = {

};

export default Header;