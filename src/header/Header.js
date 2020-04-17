import React from 'react';
import logo from '../meglogo.png'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header sticky">
        <div className="banner">
            <a href="https://askmeg.ai">
                <img src={logo} className="logo" alt="logo" />
            </a>
            <strong>
                askmeg.ai
            </strong>
            <span className="title">
                Meet Meg
            </span>
            <div class="menu-toggle" id="menu-toggle" role="button" tabindex="0">
                <div class="hamburger"></div>
                <div class="hamburger"></div>
                <div class="hamburger"></div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link to='/'>
                <a class="navbar-brand" href="#">Home</a>
            </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <Link to='/howitworks'>
                    <a class="nav-link" href="#">How It Works</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to ='/FAQ'>
                    <a class="nav-link" href="#">FAQs</a>
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

export default Header;