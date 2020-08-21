import React, { Component, useState, useEffect, useContext, useRef } from 'react';
import './AccountModals.scss';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';
import { useHistory } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { UserContext } from '../../context/UserContext';
import AccountMenu from '../mobileHeader/accountMenu/AccountMenu';
import fire from '../../config/Fire';
import { logoutUser } from '../../config/service/UserService';

function AccountModals(props) {

    const [loginModal, setLoginModal] = useState(false),
        [registerModal, setRegisterModal] = useState(false),
        [greeting, setGreeting] = useState(''),
        tempUser = useRef(),
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

    const closeRegister = (username) => {
        setRegisterModal(false);
        tempUser.current.username = username || 'anonymous';
        sessionStorage.setItem('user', JSON.stringify(tempUser.current));
        setUser(tempUser.current);
        setGreeting('Hello, ' + tempUser.current.name);
    }
    
    const setLogin = (newUser) => {
        if (newUser.username === '') {
            setLoginModal(false);
            setRegisterModal(true);
            tempUser.current = newUser;
        }
        else {
            sessionStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
            setGreeting('Hello, ' + newUser.name);
        }
    }

    const showLogout = () => {
        setGreeting('Logout');
    }

    const showGreeting = () => {
        setGreeting('Hello, ' + user.name);
    }

    const logout = () => {
        logoutUser()
            .then(res => {
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
                    <AccountMenu 
                        logout={logout}
                        registerModal={registerModal}
                        showRegister={showRegister}
                        closeRegister={closeRegister}
                        setLogin={setLogin}
                    />
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