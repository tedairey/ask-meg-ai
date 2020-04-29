import React, { Component } from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../../Helpers';

class SideMenu extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
        this.panel = React.createRef();
        this.blogs = React.createRef();
    }

    openMenu = () => {
        this.panel.current.style.width = '250px';
    }

    closeMenu = (event) => {
        this.toggleBlogMenu();
        event.target.id !== 'closebtn' && scrollTop();
        this.panel.current.style.width = '0px';
        this.blogs.current.style.height = '0px';
    }

    toggleBlogMenu = () => {
        let height = this.blogs.current.style.height;
        if (height === '' || height === '0px') {
            this.blogs.current.style.height = '163px';
        }
        else {
            this.blogs.current.style.height = '0px';
        }
    }

    render(){
        return (
            <div className="side-menu col-auto">
                <div className='mobile-menu'>
                    <a className="menu-toggle" id="menu-toggle" onClick={this.openMenu} tabIndex="0">
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                    </a>
                </div>
                <div className='menu' ref={this.panel}>
                    <a href='#' id="closebtn" onClick={this.closeMenu}>&times;</a>
                    <Link to='/' className='title' onClick={this.closeMenu}>Home</Link>
                    <Link to='/how-it-works' onClick={this.closeMenu}>How It Works</Link>
                    <Link to='/FAQ/tips-and-hints' onClick={this.closeMenu}>FAQ</Link>
                    <a href='#' onClick={this.toggleBlogMenu}>Blog Posts</a>
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