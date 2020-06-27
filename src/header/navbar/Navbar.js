import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../Helpers';

function Navbar() {

  return (
    <div>
        <nav className="navbar navbar-expand navbar-light justify-content-between">
            <Link to='/meet-meg' className="navbar-brand" onClick={scrollTop}>
                Home
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to='/meet-meg/how-it-works' className='nav-link'>
                        How It Works
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/meet-meg/try-it-for-free' className='nav-link'>
                        Try It For Free
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/meet-meg/testimonials' className='nav-link'>
                        Testimonials
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/FAQ/tips-and-hints' className="nav-link" onClick={scrollTop}>
                        FAQs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link" onClick={scrollTop}>
                        About Us
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className='nav-link dropdown-toggle' href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Blog Posts
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to='/blog-posts/all' className="dropdown-item" onClick={scrollTop}>
                            All Posts
                        </Link>
                        <Link to='/blog-posts/user' className="dropdown-item" onClick={scrollTop}>
                            My Posts
                        </Link>
                    <div className="dropdown-divider"/>
                    <Link to='/blog-posts/new' className="dropdown-item" onClick={scrollTop}>
                        New Blog Post
                    </Link>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}
  
export default Navbar;