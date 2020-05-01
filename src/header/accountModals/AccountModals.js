import React, { Component, useState } from 'react';
import './AccountModals.css';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';
import MediaQuery from 'react-responsive';

class AccountModals extends Component {
    constructor(props){
        super(props) 
        this.state = {
            loginModal: false,
            registerModal: false,
            loggedIn: false
        }
        this.initialState = this.state;
    }

    componentWillMount () {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            this.setState({loggedIn: true});
            this.setState({firstName: user.firstName});
            this.setState({greeting: 'Hello, ' + user.firstName});
        }
    }

    showLogin = () => {
        this.setState({loginModal: true});
    }

    showRegister = () => {
        this.setState({registerModal: true});
    }

    handleRegister = () => {
        this.setState({loginModal: false});
        this.setState({registerModal: true});
    }

    closeLogin = () => {
        this.setState({loginModal: false});
    }

    closeRegister = () => {
        this.setState({registerModal: false});
    }
    
    setLogin = (user) => {
        this.setState({loggedIn: true, firstName: user.firstName});
        this.setState({greeting: 'Hello, ' + this.state.firstName});
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    showLogout = () => {
        this.setState({greeting: 'Logout'})
    }

    showGreeting = () => {
        this.setState({greeting: 'Hello, ' + this.state.firstName});
    }

    logout = () => {
        this.setState({
            loggedIn: false,
            firstName: null,
            greeting: null
        })
        sessionStorage.clear();
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <span className='greeting' onMouseEnter={this.showLogout} onMouseLeave={this.showGreeting}
                        onClick={this.logout}>
                    {this.state.greeting}
                </span>
            )
        }
        else {
            return (
                <span className="account-modals">
                    <RegisterModal
                        registerModal={this.state.registerModal}
                        showRegister={this.showRegister}
                        closeRegister={this.closeRegister}
                        setLogin={this.setLogin}
                    />
                    <MediaQuery minWidth={768}>
                        |
                    </MediaQuery>
                    <LogInModal
                        loginModal={this.state.loginModal}
                        showLogin={this.showLogin}
                        handleRegister={this.handleRegister}
                        closeLogin={this.closeLogin}
                        setLogin={this.setLogin}
                    />
                </span>
            );
        }
    }

}

export default AccountModals