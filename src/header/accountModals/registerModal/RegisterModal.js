import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './RegisterModal.scss';

function RegisterModal (props) {
    const [username, setUsername] = useState(''),
        usernameerrRef = useRef(),
        usernamebox = useRef();

    const validateUsername = () => {
        const newUsername = username || 'anonymous';
                if (newUsername) {
                    props.closeRegister(username);
                }
                else { 
                    usernameerrRef.current.style.display = 'block';
                    usernamebox.current.style.borderColor = 'red';
                }
    }

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const clearError = (event) => {
        usernameerrRef.current.style.display = 'none';
        usernamebox.current.style.borderColor = 'grey';
    }

    return (
        <span id="register-modal">
            <Modal show={props.registerModal} onHide={props.closeRegister}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Username</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='register-username'>
                        <div className='register-message'>
                            Welcome to <strong>askmeg.ai!</strong> First step, create a username.
                            This username will be displayed on public blog posts and comments
                            you make throughout the website, and on your profile where you
                            can manage your account by changing your password, or viewing
                            your personal progress page. You can also choose to remain anonymous.
                        </div>
                        <span className='error-msg' ref={usernameerrRef}>
                            Username must be unique!
                        </span>
                        <span ref={usernamebox} className='account-input'>
                            <input value={username} placeholder="Username" onChange={onUsernameChange}
                                onFocus={clearError}/>
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={validateUsername}>
                        Stay Anonymous
                    </Button>
                    <Button variant="primary" onClick={validateUsername}>
                        Create Username
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}

export default RegisterModal