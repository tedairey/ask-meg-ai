import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './RegisterModal.css';

class RegisterModal extends Component {
    constructor(props){
        super(props) 
        this.state = {
            email: "",
            username: "",
            password: "",
            confirm: ""
        }
    }

    clearEmailErr = () => {
        this.refs.emailerr.style.display = 'none';
        this.refs.emailbox.style.borderColor = 'grey';
    }

    clearUsernameErr = () => {
        this.refs.usernameerr.style.display = 'none';
        this.refs.usernamebox.style.borderColor = 'grey';
    }

    clearPasswordErr = () => {
        this.refs.passworderr.style.display = 'none';
        this.refs.passwordbox.style.borderColor = 'grey';
        this.refs.confirmbox.style.borderColor = 'grey';
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onConfirmChange = (event) => {
        this.setState({confirm: event.target.value})
    }

    validateEmail = (event) => {
        if (!this.state.email) {
            this.refs.emailerr.style.display = 'block';
            this.refs.emailbox.style.borderColor = 'red';
        }
        else {
            fetch("http://localhost:8088/email/" + this.state.email)
            .then(res => res.json())
            .then(user => {
                if (user) {
                    this.refs.emailerr.style.display = 'block';
                    this.refs.emailbox.style.borderColor = 'red';
                    return false;
                }
                else {
                    //ADD USER;
                }
            })
            .catch(err => {
                this.refs.emailerr.style.display = 'block';
                this.refs.emailbox.style.borderColor = 'purple';
                return false;
            });
        }
        return true;
    }

    validateUsername = (event) => {
        if (!this.state.username) {
            this.refs.usernameerr.style.display = 'block';
            this.refs.usernamebox.style.borderColor = 'red';
        }
        else {
            fetch("http://localhost:8088/user/" + this.state.username)
            .then(res => res.json())
            .then(user => {
                if (user) {
                    this.refs.usernameerr.style.display = 'block';
                    this.refs.usernamebox.style.borderColor = 'red';
                    return false;
                }
                else {
                    //ADD USER;
                }
            })
            .catch(err => {
                this.refs.usernameerr.style.display = 'block';
                this.refs.usernamebox.style.borderColor = 'green';
                return false;
            });
        }
        return true;
    }

    validatePasswords = () => {
        const password=this.state.password,
            confirm=this.state.confirm;

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

    handleCreate = () => {
            const newUser = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
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
                    this.setState({ postId: data.id });
                    this.props.closeRegister();
                    this.props.setLogin(this.state.username);
                })
                .catch(console.log('error'));
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
                            Email must be unique
                        </span>
                        <span ref='emailbox' className='account-input'>
                            <input value={this.state.email} placeholder="Email" onBlur={this.validateEmail} 
                                onChange={this.onEmailChange} onFocus={this.clearEmailErr} />
                        </span>
                        <br/>
                        <span className='error-msg' ref='usernameerr'>
                            Username must be unique
                        </span>
                        <span ref='usernamebox' className='account-input'>
                            <input value={this.state.username} placeholder="Username" onBlur={this.validateUsername} 
                                onChange={this.onUsernameChange} onFocus={this.clearUsernameErr} />
                        </span>
                        <br/>
                        <span className='error-msg' ref='passworderr'>
                            Passwords must match
                        </span>
                        <span ref='passwordbox' className='account-input'>
                            <input value={this.state.password} placeholder="Password" type="password"
                                onChange={this.onPasswordChange} onFocus={this.clearPasswordErr}/>
                        </span>
                        <br/>
                        <span ref='confirmbox' className='account-input'>
                            <input value={this.state.confirm} placeholder="Confirm Password" type="password" 
                                onChange={this.onConfirmChange} onFocus={this.clearPasswordErr} 
                                onBlur={this.validatePasswords}/>
                        </span>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeRegister}>
                        Close
                    </Button>
                    <Button ref='create' variant="primary" onClick={this.handleCreate}>
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