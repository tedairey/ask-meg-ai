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
    
    setLogin = (username) => {
        this.setState({loggedIn: true, username: username});
        this.props.setLogin(username);
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <span className='greeting'>
                    Hello, {this.state.username}
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