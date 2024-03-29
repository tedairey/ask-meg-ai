import React from 'react';
import './MobileHeader.scss';
import AccountModals from '../accountModals/AccountModals';
import SideMenu from './sideMenu/SideMenu';

function MobileHeader() {
    return (
        <div className="mobile-header">
            <SideMenu/>
            <div className='mobile-title'>
                askmeg.ai
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