import React, { Component, useState, useEffect, useContext } from 'react';
import './AccountModals.scss';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';
import { useHistory } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { UserContext } from '../../context/UserContext';
import AccountMenu from '../mobileHeader/accountMenu/AccountMenu';
import fire from '../../config/Fire';
import { FireContext } from '../../context/FireContext';

function AccountModals(props) {

    const [loginModal, setLoginModal] = useState(false),
        [registerModal, setRegisterModal] = useState(false),
        [greeting, setGreeting] = useState(''),
        history = useHistory();

        const { user, setUser } = useContext(UserContext);

    const isSmall = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        if (user && window.innerWidth > 767) {
            setGreeting('Hello, ' + user.name);
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
        sessionStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
        setGreeting('Hello, ' + newUser.name);
    }

    const showLogout = () => {
        setGreeting('Logout');
    }

    const showGreeting = () => {
        setGreeting('Hello, ' + user.firstName);
    }

    const logout = () => {
        fire.auth().signOut()
            .then(function() {
                setUser(null);
                sessionStorage.clear();
                history.push('/meet-meg');
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    if (user) {
        return (
            <span>
                {isSmall ? <>
                    <AccountMenu logout={logout}/>
                </> : <>
                    <span className='greeting' onMouseEnter={showLogout} onMouseLeave={showGreeting}
                            onClick={logout}>
                        {greeting}
                    </span>
                </>}
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