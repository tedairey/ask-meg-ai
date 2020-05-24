import React, { useRef, useContext } from 'react';
import accountIcon from '../../../accounticon.png';
import { Link } from 'react-router-dom';
import './AccountMenu.scss';
import { scrollTop } from '../../../Helpers';
import { UserContext } from '../../../context/UserContext';

function AccountMenu(props) {

    const panel = useRef();
    const { user } = useContext(UserContext);

    const openMenu = () => {
        panel.current.style.width = '250px';
        panel.current.style.borderLeft = '1px solid grey';
    }

    const closeMenu = (event) => {
        panel.current.style.width = '0px';
        panel.current.style.borderLeft = 'none';
        event.target.id !== 'closebtn' && scrollTop();
    }

    return (
        <div className='account-menu'>
            <div className='account-icon'>
                <img src={accountIcon} onClick={openMenu}/>
            </div>
            <div id='account-panel' className='menu' ref={panel}>
                <a href='#' id="closebtn" onClick={closeMenu}>&times;</a>
                <div className='profile-icon'>
                    <img src={accountIcon} onClick={openMenu}/>
                </div>
                <Link to={`/profile/` + user.username} id='profile-name' className='title' onClick={closeMenu}>{user.name}</Link>
                <Link to='/blog-posts/user' onClick={closeMenu}>Your Blog Posts</Link>
                <Link to='/blog-posts/new' onClick={closeMenu}>New Blog Post</Link>
                <a href='#' onClick={props.logout}>Logout</a>
            </div>
        </div>
    );
}

export default AccountMenu;