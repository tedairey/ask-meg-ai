import React, { Component } from 'react';
import logo from '../meglogo.png'
import './Header.css';
import Navbar from './navbar/Navbar.js';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';

class Header extends Component {
    constructor(props){
        super(props) 
        this.state = {
            loginModal: false,
            registerModal: false
        }

        this.showLogin=this.showLogin.bind(this);
        this.showRegister=this.showRegister.bind(this);
        this.closeLogin=this.closeLogin.bind(this);
        this.closeRegister=this.closeRegister.bind(this);
        this.handleRegister=this.handleRegister.bind(this);
    }

    showLogin(event) {
        this.setState({loginModal: true});
    }

    showRegister(event) {
        this.setState({registerModal: true});
    }

    handleRegister(event) {
        this.setState({loginModal: false});
        this.setState({registerModal: true});
    }

    closeLogin(event) {
        this.setState({loginModal: false});
    }

    closeRegister(event) {
        this.setState({registerModal: false});
    }

    render(){
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
                    Team Meg
                </span>
                <span className='log-in-menu'>
                    <RegisterModal
                        registerModal={this.state.registerModal}
                        showRegister={this.showRegister}
                        closeRegister={this.closeRegister}
                    />
                    |
                    <LogInModal
                        loginModal={this.state.loginModal}
                        showLogin={this.showLogin}
                        closeLogin={this.closeLogin}
                        handleRegister={this.handleRegister}
                    />
                </span>
                <div class="menu-toggle" id="menu-toggle" role="button" tabindex="0">
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                </div>
            </div>
            <Navbar />
        </div>
      );
    }
}

Header.propTypes = {

};

export default Header;