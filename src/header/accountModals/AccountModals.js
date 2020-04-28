import React, { Component, useState } from 'react';
import './AccountModals.css';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';

class AccountModals extends Component {
    constructor(props){
        super(props) 
        this.state = {
            loginModal: false,
            registerModal: false,
            loggedIn: false
        }
    }

    componentWillMount () {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            this.setState({loggedIn: true});
            this.setState({username: user.username});
            this.setState({firstname: user.firstName});
            this.setState({name: user.firstName + " " + user.lastName});
        }
    }

    showLogin = (event) => {
        this.setState({loginModal: true});
    }

    showRegister = (event) => {
        this.setState({registerModal: true});
    }

    handleRegister = (event) => {
        this.setState({loginModal: false});
        this.setState({registerModal: true});
    }

    closeLogin = (event) => {
        this.setState({loginModal: false});
    }

    closeRegister = (event) => {
        this.setState({registerModal: false});
    }
    
    setLogin = (user) => {
        console.log(user);
        this.setState({loggedIn: true, firstname: user.firstName});
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <span className='greeting'>
                    Hello, {this.state.firstname}
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
                    |
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