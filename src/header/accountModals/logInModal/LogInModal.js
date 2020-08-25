import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './LogInModal.scss';
import { loginUser } from '../../../config/service/UserService';

function LogInModal(props) {
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        errormsg = useRef(),
        emailbox = useRef(),
        passwordbox = useRef();

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const validateLogin = () => {
        loginUser(email, password)
            .then(res => {
                const document = res.data();
                const user = {
                    username: document.blogname,
                    name: document.name,
                    progresswebpage: document.progresswebpage
                }
                props.setLogin(user);
            })
            .catch(err => {
                errormsg.current.style.display = 'block';
                emailbox.current.style.borderColor = 'red';
                passwordbox.current.style.borderColor = 'red';
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
            <button id="log-in" className='link' onClick={props.showLogin}>
                Login
            </button>

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
                    <div className='login-modal-footer'>
                        Don't Have an Account?
                        <a className='btn learn-more' href='https://testflight.apple.com/join/bYiSDeWg'>
                            Get The App
                        </a>
                    </div>
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