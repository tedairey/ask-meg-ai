import React from 'react';
import logo from '../../meglogo.png';
import './MobileHeader.scss';
import AccountModals from '../accountModals/AccountModals';
import SideMenu from './sideMenu/SideMenu';

function MobileHeader(props) {
    return (
        <div className="mobile-header row">
            <SideMenu/>
            <div className='mobile-logo'>
                <a href="https://askmeg.ai">
                    <img src={logo} className="logo" alt="logo" />
                </a>
            </div>
            <div className='mobile-login'>
                <div className='log-in-menu-toggle'>
                    <div className='accounts'>
                        <AccountModals/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;