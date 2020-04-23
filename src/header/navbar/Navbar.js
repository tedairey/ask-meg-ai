import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../Helpers';

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link to='/'>
                <a class="navbar-brand" href="#" onClick={scrollTop}>Home</a>
            </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <Link to='/how-it-works'>
                    <a class="nav-link" href="#" onClick={scrollTop}>How It Works</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to='/about'>
                    <a class="nav-link" href="#" onClick={scrollTop}>About</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to ='/FAQ/tips-and-hints'>
                    <a class="nav-link" href="#" onClick={scrollTop}>FAQs</a>
                </Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Research
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  );
}
  
export default Navbar;