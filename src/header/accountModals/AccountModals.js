import React, { useState, useEffect, useContext, useRef } from 'react';
import './AccountModals.scss';
import LogInModal from './logInModal/LogInModal.js';
import RegisterModal from './registerModal/RegisterModal.js';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { UserContext } from '../../context/UserContext';
import AccountMenu from '../mobileHeader/accountMenu/AccountMenu';
import { logoutUser, getUserProfile, addNewUsername } from '../../config/service/UserService';

function AccountModals(props) {

    const [loginModal, setLoginModal] = useState(false),
        [registerModal, setRegisterModal] = useState(false),
        [greeting, setGreeting] = useState(''),
        tempUser = useRef(),
        tempProfile = useRef(),
        history = useHistory();

        const { user, setUser } = useContext(UserContext);

    const isSmall = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        if (user && window.innerWidth > 767) {
            user.name ? setGreeting('Hello, ' + user.name) : setGreeting('Welcome');
        }
    },[user]);

    const showLogin = () => {
        setLoginModal(true);
    }

    const showRegister = () => {
        setRegisterModal(true);
    }

    const closeLogin = () => {
        setLoginModal(false);
    }

    const closeRegister = (username) => {
        setRegisterModal(false);
        if (username) {
            addNewUsername(tempUser.current, username)
                .then(res => {
                    tempProfile.current.username = username;
                    sessionStorage.setItem('user', JSON.stringify(tempProfile.current));
                    setUser(tempProfile.current);
                    setGreeting('Hello, ' + tempProfile.current.name);
                    tempUser.current = null;
                })
                .catch(err => {
                    tempUser.current = null;
                    console.log(err);
                })
        }
        else {
            setUser('anon');
            setGreeting('Welcome!');
        }
    }
    
    const setLogin = (newUser) => {
        getUserProfile(newUser)
            .then(res => {
                const newProfile = {
                    username: res.blogname,
                    name: res.name,
                    progresswebpage: res.progresswebpage
                }
                if (!res.healthyfoodswebpage.includes('_')) {
                    const url = res.healthyfoodswebpage.split('/');
                    newProfile.shoppingId = url[url.length - 1];
                }
                if (res.blogname === '') {
                    tempUser.current = newUser;
                    tempProfile.current = newProfile;
                    setLoginModal(false);
                    setRegisterModal(true);
                }
                else {
                    sessionStorage.setItem('user', JSON.stringify(newProfile));
                    setUser(newProfile);
                    setGreeting('Hello, ' + newProfile.name);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    const showLogout = () => {
        setGreeting('Logout');
    }

    const showGreeting = () => {
        user.name ? setGreeting('Hello, ' + user.name) : setGreeting('Welcome');
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
                    closeLogin={closeLogin}
                    setLogin={setLogin}
                    isAppUser={props.isAppUser}
                />
            </span>
        );
    }

}

export default AccountModals