import React, { useRef, useContext, useEffect } from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../Helpers';
import { UserContext } from '../../../context/UserContext';
import { RiAccountCircleLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

function SideMenu(props) {
    
    const panel = useRef(),
        { user } = useContext(UserContext),
        isLarge = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        function handleClickOutside(event) {
            if (panel.current && !panel.current.contains(event.target)) {
                if (panel.current.style.width !== '' && panel.current.style.width !=='0px') {
                    closeMenu(event);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    const openMenu = () => {
        panel.current.style.width = '250px';
    }

    const closeMenu = (event) => {
        if (event.target.name !== 'no-scroll') {
            scrollTop();
        }
        panel.current.style.width = '0px';
        return false;
    }
    
    return (
        <nav className="side-menu">
            <div className='mobile-menu'>
                <button name='no-scroll' className="menu-toggle" id="menu-toggle" onClick={openMenu} tabIndex="0">
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </button>
            </div>
            <div id='nav-menu' className='menu' ref={panel}>
                <button id='closebtn' className="close-x" onClick={closeMenu}>&times;</button>
                {user && user.name && isLarge ? <>
                    <div className='profile-icon' style={{color: '#21a1af'}}>
                        <RiAccountCircleLine size='150px' onClick={openMenu}/>
                    </div>
                    <Link to={`/profile/` + user.username} id='profile-link' onClick={closeMenu}>
                        {user.username}
                    </Link>
                </> :
                    <Link to='/meet-meg' className='panel-title' onClick={closeMenu}>Meet Meg</Link>
                }
                <Link name='no-scroll' to='/meet-meg/how-it-works' onClick={closeMenu}>How It Works</Link>
                <Link name='no-scroll' to='/meet-meg/try-it-for-free' onClick={closeMenu}>Try It For Free</Link>
                <Link name='no-scroll' to='/meet-meg/testimonials' onClick={closeMenu}>Testimonials</Link>
                <Link to='/FAQ/tips-and-hints' onClick={closeMenu}>FAQ</Link>
                <Link to='/tutorials' onClick={closeMenu}>Tutorials</Link>
                <Link to='/healthy-options' onClick={closeMenu}>Today's Healthy Foods</Link>
                <Link to='/terms-of-use' onClick={closeMenu}>Terms of Use</Link>
                <Link to='/privacy-policy' onClick={closeMenu}>Privacy Policy</Link>
                <Link to='/about' onClick={closeMenu}>About</Link>
                <Link name='no-scroll' to='/about/contact-us' onClick={closeMenu}>Contact Us</Link>
            </div>
        </nav>
    );
}

export default SideMenu;