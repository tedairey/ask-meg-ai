import React, { useState, createRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './LogInModal.css';

function LogInModal(props) {
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('')

    const errormsg = React.createRef();
    const emailbox = React.createRef();
    const passwordbox = React.createRef();

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const validateLogin = () => {
        fetch("http://localhost:8088/" + email)
            .then(res => res.json())
            .then(user => {
                if (!user || !email || user.password != password) {
                    errormsg.current.style.display = 'block';
                    emailbox.current.style.borderColor = 'red';
                    passwordbox.current.style.borderColor = 'red';
                    return false;
                }
                else {
                    props.closeLogin();
                    props.setLogin(user);
                }
            })
            .catch(err => {
                return false;
            });
    }

    const clearErrors = () => {
        errormsg.current.style.display = 'none';
        emailbox.current.style.borderColor = 'grey';
        passwordbox.current.style.borderColor = 'grey';
    }

    return (
        <span id="log-in-modal">
            <a id="log-in" href="#" onClick={props.showLogin}>
                Log In
            </a>

            <Modal show={props.loginModal} onHide={props.closeLogin}>
                <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className='error-msg' ref={errormsg}>
                        Username or Password is not correct
                    </span>
                    <span ref={emailbox} className='account-input'>
                        <input value={email} placeholder="Email" onChange={onEmailChange}
                            onFocus={clearErrors}/>
                    </span>
                    <br/>
                    <span ref={passwordbox} className='account-input'>
                        <input value={password} placeholder="Password" type="password" 
                            onChange={onPasswordChange} onFocus={clearErrors}/>
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    Don't Have an Account?
                    <a href="#" onClick={props.handleRegister}>
                        Register
                    </a>
                    <br/>
                    <Button variant="primary" onClick={validateLogin}>
                        Log In
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}

export default LogInModal