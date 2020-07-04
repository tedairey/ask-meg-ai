import React, { useRef, useContext, useEffect, useState } from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../Helpers';
import { UserContext } from '../../../context/UserContext';
import { RiAccountCircleLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';
import BetaTestingModal from '../../../alertModals/BetaTestingModal';

function SideMenu(props) {
    
    const panel = useRef(),
        blogs = useRef(),
        blogLink = useRef(),
        user = useContext(UserContext).user,
        [showBetaTesting, setShowBetaTesting] = useState(false),
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
        if (user) {
            toggleBlogMenu();
            blogs.current.style.height = '0px';
            blogLink.current.style.borderTop = '0';
        }
        if (event.target.name !== 'no-scroll') {
            scrollTop();
        }
        panel.current.style.width = '0px';
        return false;
    }

    const toggleBlogMenu = () => {
        let height = blogs.current.style.height;
        if (height === '' || height === '0px') {
            blogs.current.style.height = '141px';
            blogLink.current.style.borderTop = '.3em solid';
        }
        else {
            blogs.current.style.height = '0px';
            blogLink.current.style.borderTop = '0';
        }
    }
    
    return (
        <div className="side-menu">
            <div className='mobile-menu'>
                <a name='no-scroll' className="menu-toggle" id="menu-toggle" onClick={openMenu} tabIndex="0">
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </a>
            </div>
            <div id='nav-menu' className='menu' ref={panel}>
                <a href='#' id='closebtn' className="close-x" onClick={closeMenu}>&times;</a>
                {user && isLarge ? <>
                    <div className='profile-icon' style={{color: '#21a1af'}}>
                        <RiAccountCircleLine size='150px' onClick={openMenu}/>
                    </div>
                    <Link to={`/profile/` + user.username} id='profile-link' onClick={closeMenu}>
                        {user.name}
                    </Link>
                </> :
                    <Link to='/meet-meg' className='panel-title' onClick={closeMenu}>Meet Meg</Link>
                }
                <Link name='no-scroll' to='/meet-meg/how-it-works' onClick={closeMenu}>How It Works</Link>
                <Link name='no-scroll' to='/meet-meg/try-it-for-free' onClick={closeMenu}>Try It For Free</Link>
                <Link name='no-scroll' to='/meet-meg/testimonials' onClick={closeMenu}>Testimonials</Link>
                <Link to='/FAQ/tips-and-hints' onClick={closeMenu}>FAQ</Link>
                {user ? <>
                    <a ref={blogLink} name='no-scroll' id='blog-link' href='#' onClick={toggleBlogMenu}>
                        Blog Posts
                    </a>
                    <div className='blog-menu' ref={blogs}>
                        <Link to='/blog-posts/all' onClick={closeMenu}>Recent Posts</Link>
                        <Link to={'/blog-posts/user'} onClick={closeMenu}>Your Posts</Link>
                        <Link to='/blog-posts/new' onClick={closeMenu}>New Post</Link>
                    </div> </> : <>
                    <Link name='no-scroll' to='/blog-posts/all' onClick={closeMenu}>
                        Community
                    </Link>
                </>}
                <a name='no-scroll' href='#' onClick={() => setShowBetaTesting(true)}>
                    Beta Testing
                </a>
                <Link to='/about' onClick={closeMenu}>About</Link>
                <Link name='no-scroll' to='/about/contact-us' onClick={closeMenu}>Contact Us</Link>
                <Link to='/conduct' onClick={closeMenu}>Conduct</Link>
            </div>
            <BetaTestingModal showModal={showBetaTesting} setShowModal={setShowBetaTesting}/>
        </div>
    );
}

export default SideMenu;