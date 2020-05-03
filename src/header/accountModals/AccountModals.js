import React, { Component, useState, useEffect, useContext } from 'react';
import './AccountModals.css';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';
import MediaQuery from 'react-responsive';
import { UserContext } from '../../context/UserContext';

function AccountModals(props) {

    const [loginModal, setLoginModal] = useState(false),
        [registerModal, setRegisterModal] = useState(false),
        [greeting, setGreeting] = useState('');

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            setGreeting('Hello, ' + user.firstName);
        }
    },[user]);

    const showLogin = () => {
        setLoginModal(true);
    }

    const showRegister = () => {
        setRegisterModal(true);
    }

    const handleRegister = () => {
        setLoginModal(false);
        setRegisterModal(true);
    }

    const closeLogin = () => {
        setLoginModal(false);
    }

    const closeRegister = () => {
        setRegisterModal(false);
    }
    
    const setLogin = (newUser) => {
        const profile = {
            username: newUser.username,
            firstName: newUser.firstName,
            name: newUser.firstName + ' ' + newUser.lastName,
        }
        setUser(profile);
        setGreeting('Hello, ' + newUser.firstName);
    }

    const showLogout = () => {
        setGreeting('Logout');
    }

    const showGreeting = () => {
        setGreeting('Hello, ' + user.firstName);
    }

    const logout = () => {
        setUser(null);
        sessionStorage.clear();
    }
    
    if (user) {
        return (
            <span className='greeting' onMouseEnter={showLogout} onMouseLeave={showGreeting}
                    onClick={logout}>
                {greeting}
            </span>
        )
    }
    else {
        return (
            <span className="account-modals">
                <RegisterModal
                    registerModal={registerModal}
                    showRegister={showRegister}
                    closeRegister={closeRegister}
                    setLogin={setLogin}
                />
                <MediaQuery minWidth={768}>
                    |
                </MediaQuery>
                <LogInModal
                    loginModal={loginModal}
                    showLogin={showLogin}
                    handleRegister={handleRegister}
                    closeLogin={closeLogin}
                    setLogin={setLogin}
                />
            </span>
        );
    }

}

export default AccountModals