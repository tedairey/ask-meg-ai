import React, { useRef, useContext, useEffect } from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../Helpers';
import { UserContext } from '../../../context/UserContext';
import { RiAccountCircleLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

function SideMenu(props) {
    
    const panel = useRef(),
        blogs = useRef(),
        blogLink = useRef(),
        user = useContext(UserContext).user,
        isLarge = useMediaQuery({ query: '(min-width: 768px)' });

    const openMenu = () => {
        panel.current.style.width = '250px';
        window.innerWidth < 768 ?
            panel.current.style.borderRight = '1px solid grey' :
            panel.current.style.borderLeft = '1px solid grey';
    }

    const closeMenu = (event) => {
        toggleBlogMenu();
        event.target.id === 'closebtn' ? event.preventDefault() : scrollTop();
        panel.current.style.width = '0px';
        blogs.current.style.height = '0px';
        blogLink.current.style.borderTop = '0';
        panel.current.style.border = 'none';
    }

    const toggleBlogMenu = () => {
        let height = blogs.current.style.height;
        if (height === '' || height === '0px') {
            blogs.current.style.height = '150px';
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
                <a className="menu-toggle" id="menu-toggle" onClick={openMenu} tabIndex="0">
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </a>
            </div>
            <div id='nav-menu' className='menu' ref={panel}>
                <a href='#' id="closebtn" onClick={closeMenu}>&times;</a>
                {user && isLarge ? <>
                    <div className='profile-icon' style={{color: '#21a1af'}}>
                        <RiAccountCircleLine size='150px' onClick={openMenu}/>
                    </div>
                    <Link to={`/profile/` + user.username} id='profile-link' onClick={closeMenu}>
                        {user.name}
                    </Link>
                </> :
                    <Link to='/meet-meg' className='title' onClick={closeMenu}>Meet Meg</Link>
                }
                <Link to='/meet-meg/how-it-works' onClick={closeMenu}>How It Works</Link>
                <Link to='/meet-meg/try-it-for-free' onClick={closeMenu}>Try It For Free</Link>
                <Link to='/meet-meg/testimonials' onClick={closeMenu}>Testimonials</Link>
                <Link to='/FAQ/tips-and-hints' onClick={closeMenu}>FAQ</Link>
                <a ref={blogLink} id='blog-link' href='#' onClick={toggleBlogMenu}>Blog Posts</a>
                <div className='blog-menu' ref={blogs}>
                    <Link to='/blog-posts/all' onClick={closeMenu}>Recent Posts</Link>
                    <Link to={'/blog-posts/user'} onClick={closeMenu}>Your Posts</Link>
                    <Link to='/blog-posts/new' onClick={closeMenu}>New Post</Link>
                </div>
                <Link to='/about' onClick={closeMenu}>About</Link>
                <Link to='/about/contact-us' onClick={closeMenu}>Contact Us</Link>
            </div>
        </div>
    );
}

export default SideMenu;