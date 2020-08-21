import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './LogInModal.scss';
import fire from '../../../config/Fire';
import BetaTestingModal from '../../../alertModals/BetaTestingModal';

function LogInModal(props) {
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [betaTestingModal, setBetaTestingModal] = useState(false),
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
        fire.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                if (!res) {
                    errormsg.current.style.display = 'block';
                    emailbox.current.style.borderColor = 'red';
                    passwordbox.current.style.borderColor = 'red';
                    return false;
                }
                else {
                    const db = fire.firestore();
                    let docRef = db.collection('Users').doc(res.user.uid);
                    docRef.get()
                        .then(doc => {
                            if (doc.exists) {
                                const document = doc.data();
                                const user = {
                                    username: document.blogname,
                                    name: document.name,
                                    progresswebpage: document.progresswebpage
                                }
                                props.setLogin(user);
                            }
                            else {
                                console.log('you fucked up');
                            }
                        })
                        .catch(err => {
                            console.log('err');
                        })
                }
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
                        <button className='btn learn-more' onClick={()=>setBetaTestingModal(true)}>
                            Learn More
                        </button>
                    </div>
                    <br/>
                    <Button variant="primary" onClick={validateLogin}>
                        Log In
                    </Button>
                </Modal.Footer>
            </Modal>
            <BetaTestingModal showModal={betaTestingModal} setShowModal={setBetaTestingModal}/>
        </span>
    );
}

export default LogInModal