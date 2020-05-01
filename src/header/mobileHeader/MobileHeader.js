import React, { Component } from 'react';
import logo from '../../meglogo.png';
import './MobileHeader.css';
import AccountModals from '../accountModals/AccountModals';
import SideMenu from './sideMenu/SideMenu';

class MobileHeader extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    render(){
        return (
            <div className="mobile-header row">
                <SideMenu/>
                <div className='mobile-logo col-auto'>
                    <a href="https://askmeg.ai">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                </div>
                <div className='mobile-login col-auto'>
                    <div className='log-in-menu-toggle'>
                        <span className='accounts'>
                            <AccountModals/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileHeader;