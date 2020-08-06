import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './RegisterModal.scss';
import RegisterField from './registerField/RegisterField';
import MediaQuery from 'react-responsive';
import fire from '../../../config/Fire';

function RegisterModal (props) {

    const validateField = (field, err, box) => {
        if (!field) {
            err.style.display = 'block';
            box.style.borderColor = 'red';
            return false;
        }
        return true;
    }

    const validateUsername = (username, err, box) => {
        if (!this.validateField(username, err, box)) {
            this.setState({usernameerr: 'Username is a required field'});
        }
        else {
            this.profile.username = username;
            return true;
        }
        // else {
        //     fetch("http://localhost:8088/user/" + username)
        //     .then(res => res.json())
        //     .then(user => {
        //         if (user) {
        //             this.setState({usernameerr: 'Username must be unique'});
        //             err.style.display = 'block';
        //             box.style.borderColor = 'red';
        //             return false;
        //         }
        //         else {
        //             this.profile.username = username;
        //         }
        //     })
        //     .catch(err => {
        //         err.style.display = 'block';
        //         box.style.borderColor = 'green';
        //         return false;
        //     });
        // }
        return true;
    }

    const validatePassword = (password, err, box) => {
        if (!this.validateField(password, err, box)) {
            this.setState({passworderr: 'Password is a required field'});
        }
        else {
            this.setState({passwordref: err, passwordbox: box});
            this.profile.password = password;
        }
    }

    const validateConfirm = (confirm, err, box) => {
        this.setState({confirmbox: box});
        this.profile.confirm = confirm;
    }

    const confirmPasswords = () => {
        const password=this.profile.password,
            confirm=this.profile.confirm,
            passwordref=this.state.passwordref,
            passwordbox=this.state.passwordbox,
            confirmbox=this.state.confirmbox;

        if (!password) {
            this.setState({passworderr: 'Password is a required field'})
            passwordref.style.display = 'block';
            passwordbox.style.borderColor = 'red';
        }
        if (!password || password !== confirm) {
            this.setState({passworderr: 'Passwords do not match'})
            passwordref.style.display = 'block';
            passwordbox.style.borderColor = 'red';
            confirmbox.style.borderColor = 'red';
        }
        else {
            return true;
        }
    }

    const handleCreate = () => {
        if (this.confirmPasswords()) {
            const newUser = {
                email: this.profile.email,
                username: this.profile.username,
                firstName: this.profile.firstName,
                lastName: this.profile.lastname,
                password: this.profile.password,
                isAdmin: false
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            };
            fire.auth().createUserWithEmailAndPassword(this.profile.email, this.profile.password)
                .then(function(res) {
                    console.log(res);
                    console.log('success');
                })
                .catch(function(error) {
                    // Handle Errors here.
                    console.log(error.code);
                    console.log(error.message);
                });
            // fetch('http://localhost:8088/newUser', requestOptions)
            //     .then(response => response.json())
            //     .then(data => {
            //         this.props.closeRegister();
            //         this.props.setLogin(newUser);
            //     })
            //     .catch(console.log('error'));
        }
    }
    return (
        <span id="register-modal">
            <Modal show={this.props.registerModal} onHide={this.props.closeRegister}>
                <Modal.Header closeButton>
                <Modal.Title>Create an Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterField
                        placeholder="Username" errormsg={this.state.usernameerr}
                        validateField={this.validateUsername}
                    />
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

export default RegisterModal