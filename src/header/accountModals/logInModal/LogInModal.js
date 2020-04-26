import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './LogInModal.css';

class LogInModal extends Component {
    constructor(props){
        super(props) 
        this.state = {
            email: "",
            password: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    validateLogin = () => {
        fetch("http://localhost:8088/" + this.state.email)
            .then(res => res.json())
            .then(user => {
                if (!user || !this.state.email || user.password != this.state.password) {
                    this.refs.mismatcherr.style.display = 'block';
                    this.refs.emailbox.style.borderColor = 'red';
                    this.refs.passwordbox.style.borderColor = 'red';
                    return false;
                }
                else {
                    this.props.closeLogin();
                    this.props.setLogin(user.username);
                }
            })
            .catch(err => {
                this.refs.mismatcherr.style.display = 'block';
                this.refs.emailbox.style.borderColor = 'red';
                this.refs.passwordbox.style.borderColor = 'red';
                return false;
            });
    }

    clearErrors = () => {
        this.refs.mismatcherr.style.display = 'none';
        this.refs.emailbox.style.borderColor = 'grey';
        this.refs.passwordbox.style.borderColor = 'grey';
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
                        <span className='error-msg' ref='mismatcherr'>
                            Username or Password is not correct
                        </span>
                        <span ref='emailbox' className='account-input'>
                            <input value={this.state.email} placeholder="Email" onChange={this.onEmailChange}
                                onFocus={this.clearErrors}/>
                        </span>
                        <br/>
                        <span ref='passwordbox' className='account-input'>
                            <input value={this.state.password} placeholder="Password" type="password" 
                                onChange={this.onPasswordChange} onFocus={this.clearErrors}/>
                        </span>
                    </Modal.Body>
                    <Modal.Footer>
                    Don't Have an Account?
                    <a href="#" onClick={this.props.handleRegister}>
                        Register
                    </a>
                    <br/>
                    <Button variant="primary" onClick={this.validateLogin}>
                        Log In
                    </Button>
                    </Modal.Footer>
                </Modal>
            </span>
        );
    }
}

export default LogInModal