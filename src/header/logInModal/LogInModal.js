import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './LogInModal.css';

class LogInModal extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    handleLogin = (event) => {
        const email = this.refs.email.value,
            password = this.refs.password.value;
        if (!email || !password) {
            alert("please enter all fields");
        }
        else {
            this.props.closeLogin();
            alert("logged in");
        }
    }

    render() {
        return (
            <span id="log-in-modal">
                <a id="log-in" href="#" onClick={this.props.showLogin}>
                    Log In
                </a>

                <Modal show={this.props.loginModal} onHide={this.props.closeLogin}>
                    <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span className='account-input'>
                            <input ref='email' placeholder="Email"/>
                        </span>
                        <br/>
                        <span className='account-input'>
                            <input ref='password' placeholder="Password" type="password"/>
                        </span>
                    </Modal.Body>
                    <Modal.Footer>
                    Don't Have an Account?
                    <a href="#" onClick={this.props.handleRegister}>
                        Register
                    </a>
                    <br/>
                    <Button variant="primary" onClick={this.handleLogin}>
                        Log In
                    </Button>
                    </Modal.Footer>
                </Modal>
            </span>
        );
    }
}

export default LogInModal