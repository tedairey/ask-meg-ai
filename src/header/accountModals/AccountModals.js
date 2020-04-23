import React, { Component } from 'react';
import './AccountModals.css';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';

class AccountModals extends Component {
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

    render() {
        return (
            <span className="account-modals">
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
        );
    }

}

export default AccountModals