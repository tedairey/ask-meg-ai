import React, { Component, useState, createRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './RegisterModal.css';

class RegisterModal extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
        this.email = React.createRef();
    }

    handleCreate = (event) => {
        const email=this.refs.email.value,
            password=this.refs.password.value,
            confirm=this.refs.confirm.value;

        if (!email || !password || !confirm) {
            alert("please enter all fields");
        }
        else if (password !== confirm) {
            alert("passwords must match");
        }
        else {
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
                        <span className='account-input'>
                            <input ref='email' placeholder="Email"/>
                        </span>
                        <br/>
                        <span className='account-input'>
                            <input ref='password' placeholder="Password" type="password"/>
                        </span>
                        <br/>
                        <span className='account-input'>
                            <input ref='confirm' placeholder="Confirm Password" type="password"/>
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