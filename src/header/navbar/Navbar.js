import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../Helpers';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to='/'>
                <a className="navbar-brand" href="#" onClick={scrollTop}>Home</a>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to='/how-it-works'>
                    <a className="nav-link" href="#" onClick={scrollTop}>How It Works</a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to='/about'>
                    <a className="nav-link" href="#" onClick={scrollTop}>About</a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to ='/FAQ/tips-and-hints'>
                    <a className="nav-link" href="#" onClick={scrollTop}>FAQs</a>
                </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Blog Posts
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Meg</a>
                        <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  );
}
  
export default Navbar;