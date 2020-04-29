import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './RegisterModal.css';
import RegisterField from './registerField/RegisterField';
import MediaQuery from 'react-responsive';

class RegisterModal extends Component {
    constructor(props){
        super(props) 
        this.state = {
            
        }
        this.profile = {};
    }

    validateField = (field, err, box) => {
        if (!field) {
            err.style.display = 'block';
            box.style.borderColor = 'red';
            return false;
        }
        return true;
    }

    validateFirstName = (name, err, box) => {
        if (this.validateField(name, err, box)) {
            this.profile.firstname = name;
        }
    }

    validateLastName = (name, err, box) => {
        if (this.validateField(name, err, box)) {
            this.profile.lastname = name;
        }
    }

    validateEmail = (email, err, box) => {
        if (!this.validateField(email, err, box)) {
            this.setState({emailerr: 'Email is a required field'});
        }
        else {
            fetch("http://localhost:8088/email/" + email)
            .then(res => res.json())
            .then(user => {
                if (user) {
                    this.setState({emailerr: 'Email must be unique'})
                    err.style.display = 'block';
                    box.style.borderColor = 'red';
                    return false;
                }
                else {
                    this.profile.email = email;
                }
            })
            .catch(err => {
                err.style.display = 'block';
                box.style.borderColor = 'purple';
                return false;
            });
        }
        return true;
    }

    validateUsername = (username, err, box) => {
        if (!this.validateField(username, err, box)) {
            this.setState({usernameerr: 'Username is a required field'});
        }
        else {
            fetch("http://localhost:8088/user/" + username)
            .then(res => res.json())
            .then(user => {
                if (user) {
                    this.setState({usernameerr: 'Username must be unique'});
                    err.style.display = 'block';
                    box.style.borderColor = 'red';
                    return false;
                }
                else {
                    this.profile.username = username;
                }
            })
            .catch(err => {
                err.style.display = 'block';
                box.style.borderColor = 'green';
                return false;
            });
        }
        return true;
    }

    validatePassword = (password, err, box) => {
        if (!this.validateField(password, err, box)) {
            this.setState({passworderr: 'Password is a required field'});
        }
        else {
            this.setState({passwordref: err, passwordbox: box});
            this.profile.password = password;
        }
    }

    confirmPasswords = (confirm, err, box) => {
        const password=this.profile.password,
            passwordref=this.state.passwordref,
            passwordbox=this.state.passwordbox;

        if (!password) {
            this.setState({passworderr: 'Password is a required field'})
            passwordref.style.display = 'block';
            passwordbox.style.borderColor = 'red';
        }
        if (!password || password !== confirm) {
            this.setState({passworderr: 'Passwords do not match'})
            passwordref.style.display = 'block';
            passwordbox.style.borderColor = 'red';
            box.style.borderColor = 'red';
        }
        else {
            return true;
        }
    }

    isEnabled = () => {
        return Object.keys(this.profile).length === 5 ? true : false
    }

    handleCreate = () => {
        if (this.isEnabled()) {
            const newUser = {
                email: this.profile.email,
                username: this.profile.username,
                firstName: this.profile.firstname,
                lastName: this.profile.lastname,
                password: this.profile.password,
                isAdmin: false
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            };
            fetch('http://localhost:8088/newUser', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(this.profile);
                    this.props.closeRegister();
                    this.props.setLogin(newUser);
                })
                .catch(console.log('error'));
        }
    }

    render() {
        return (
            <span id="register-modal">
                <MediaQuery minWidth={768}>
                    <a id="register" href="#" onClick={this.props.showRegister}>
                        Register
                    </a>
                </MediaQuery>

                <Modal show={this.props.registerModal} onHide={this.props.closeRegister}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create an Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RegisterField
                            placeholder="Email" errormsg={this.state.emailerr}
                            validateField={this.validateEmail}
                        />
                        <RegisterField
                            placeholder="First Name" errormsg="First Name is required"
                            validateField={this.validateFirstName}
                        />
                        <RegisterField
                            placeholder="Last Name" errormsg="Last Name is required"
                            validateField={this.validateLastName}
                        />
                        <RegisterField
                            placeholder="Username" errormsg={this.state.usernameerr}
                            validateField={this.validateUsername}
                        />
                        <RegisterField
                            placeholder="Password" errormsg={this.state.passworderr}
                            validateField={this.validatePassword} isPassword='password'
                        />
                        <RegisterField
                            placeholder="Confirm Password" errormsg=""
                            validateField={this.confirmPasswords} isPassword='password'
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
}

RegisterModal.propTypes = {

};

export default RegisterModal