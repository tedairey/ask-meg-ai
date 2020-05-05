import React, { Component } from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../Helpers';

class SideMenu extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
        this.panel = React.createRef();
        this.blogs = React.createRef();
        this.blogLink = React.createRef();
    }

    openMenu = () => {
        this.panel.current.style.width = '250px';
        window.innerWidth < 768 ?
            this.panel.current.style.borderRight = '1px solid grey' :
            this.panel.current.style.borderLeft = '1px solid grey';
    }

    closeMenu = (event) => {
        this.toggleBlogMenu();
        event.target.id !== 'closebtn' && scrollTop();
        this.panel.current.style.width = '0px';
        this.blogs.current.style.height = '0px';
        this.blogLink.current.style.borderTop = '0';
        this.panel.current.style.border = 'none';
    }

    toggleBlogMenu = () => {
        let height = this.blogs.current.style.height;
        if (height === '' || height === '0px') {
            this.blogs.current.style.height = '163px';
            this.blogLink.current.style.borderTop = '.3em solid';
        }
        else {
            this.blogs.current.style.height = '0px';
            this.blogLink.current.style.borderTop = '0';
        }
    }

    render(){
        return (
            <div className="side-menu">
                <div className='mobile-menu'>
                    <a className="menu-toggle" id="menu-toggle" onClick={this.openMenu} tabIndex="0">
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                    </a>
                </div>
                <div id='nav-menu' className='menu' ref={this.panel}>
                    <a href='#' id="closebtn" onClick={this.closeMenu}>&times;</a>
                    <Link to='/' className='title' onClick={this.closeMenu}>Home</Link>
                    <Link to='/how-it-works' onClick={this.closeMenu}>How It Works</Link>
                    <Link to='/FAQ/tips-and-hints' onClick={this.closeMenu}>FAQ</Link>
                    <a ref={this.blogLink} id='blog-link' href='#' onClick={this.toggleBlogMenu}>Blog Posts</a>
                    <div className='blog-menu' ref={this.blogs}>
                        <Link to='/blog-posts/all' onClick={this.closeMenu}>Recent Posts</Link>
                        <Link to='/blog-posts/my' onClick={this.closeMenu}>Your Posts</Link>
                        <Link to='/blog-posts/new' onClick={this.closeMenu}>New Post</Link>
                    </div>
                    <Link to='/about' onClick={this.closeMenu}>About</Link>
                </div>
            </div>
        );
    }
}

export default SideMenu;