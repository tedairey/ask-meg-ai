import React, { useRef, useEffect, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../Helpers';

function Navbar() {

  return (
    <div>
        <nav className="navbar navbar-expand navbar-light justify-content-between">
            <Link to='/' className="navbar-brand" href="#" onClick={scrollTop}>
                Home
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to='/how-it-works' className="nav-link" onClick={scrollTop}>
                    How It Works
                </Link>
                </li>
                <li className="nav-item">
                <Link to='/FAQ/tips-and-hints' className="nav-link" href="#" onClick={scrollTop}>
                    FAQs
                </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link" href="#" onClick={scrollTop}>
                        About Us
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className='nav-link dropdown-toggle' href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Blog Posts
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to='/blog-posts/all' className="dropdown-item" href="#" onClick={scrollTop}>
                            All Posts
                        </Link>
                        <Link to='/blog-posts/my' className="dropdown-item" href="#" onClick={scrollTop}>
                            My Posts
                        </Link>
                    <div className="dropdown-divider"/>
                    <Link to='/blog-posts/new' className="dropdown-item" href="#" onClick={scrollTop}>
                        New Blog Post
                    </Link>
                    </div>
                </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn search my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  );
}
  
export default Navbar;