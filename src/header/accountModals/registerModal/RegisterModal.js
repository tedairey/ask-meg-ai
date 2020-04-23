import React, { Component, useState, createRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './RegisterModal.css';

class RegisterModal extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    validateEmail = () => {
        const email=this.refs.email.value;
        if (!email) {
            this.refs.emailerr.style.display = 'block';
            this.refs.emailbox.style.borderColor = 'red';
        }
        else return true;
    }

    validatePasswords = () => {
        const password=this.refs.password.value,
            confirm=this.refs.confirm.value;

        if (!password) {
            this.refs.passworderr.style.display = 'block';
            this.refs.passwordbox.style.borderColor = 'red';
        }
        if (!password || password !== confirm) {
            this.refs.passworderr.style.display = 'block';
            this.refs.passwordbox.style.borderColor = 'red';
            this.refs.confirmbox.style.borderColor = 'red';
        }
        else {
            return true;
        }
    }

    clearEmailErr = () => {
        this.refs.emailerr.style.display = 'none';
        this.refs.emailbox.style.borderColor = 'grey';
    }

    clearPasswordErr = () => {
        this.refs.passworderr.style.display = 'none';
        this.refs.passwordbox.style.borderColor = 'grey';
        this.refs.confirmbox.style.borderColor = 'grey';
    }

    handleCreate = (event) => {
        if (this.validatePasswords() && this.validateEmail()) {
            this.props.closeRegister();
            alert("registered");
        }
    }

    render() {
        return (
            <span id="register-modal">
                <a id="register" href="#" onClick={this.props.showRegister}>
                    Register
                </a>

                <Modal show={this.props.registerModal} onHide={this.props.closeRegister}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create an Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span className='error-msg' ref='emailerr'>
                            Email cannot be blank
                        </span>
                        <span ref='emailbox' className='account-input'>
                            <input ref='email' placeholder="Email" onFocus={this.clearEmailErr} />
                        </span>
                        <br/>
                        <span className='error-msg' ref='passworderr'>
                            Passwords must match
                        </span>
                        <span ref='passwordbox' className='account-input'>
                            <input ref='password' placeholder="Password" type="password"
                                onFocus={this.clearPasswordErr}/>
                        </span>
                        <br/>
                        <span ref='confirmbox' className='account-input'>
                            <input ref='confirm' placeholder="Confirm Password" type="password" 
                                onFocus={this.clearPasswordErr} onBlur={this.validatePasswords}/>
                        </span>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeRegister}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleCreate}>
                        Create an Account
                    </Button>
                    </Modal.Footer>
                </Modal>
            </span>
        );
    }
}

RegisterModal.propTypes = {

};

export default RegisterModal