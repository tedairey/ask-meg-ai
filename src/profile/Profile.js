import React, {useState, useEffect, useContext, useRef} from 'react';
import './Profile.scss';
import accountIcon from '../accounticon.png';
import RegisterField from '../header/accountModals/registerModal/registerField/RegisterField';
import { Modal } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import PostsByUser from '../blogPosts/postsByUser/PostsByUser';

function Profile(props) {
  
    const user = useContext(UserContext),
        [profile, setProfile] = useState({}),
        [isUserProfile, setIsUserProfile] = useState(false),
        [showChangePassword, setShowChangePassword] = useState(false),
        currentPasswordRef = useRef(),
        newPasswordRef = useRef(),
        confirmPasswordRef = useRef(),
        [passwordErr, setPasswordErr] = useState(''),
        passwordErrRef = useRef(),
        mismatchErrRef = useRef(),
        [currentPassword, setCurrentPassword] = useState(''),
        [newPassword, setNewPassword] = useState(''),
        [confirmPassword, setConfirmPassword] = useState(''),
        [blogPostsHeader, setBlogPostsHeader] = useState('');

    useEffect(() => {
        const username = props.match.params.handle;
        fetch('http://localhost:8088/' + username)
            .then(res => res.json())
            .then(profile => {
                setProfile(profile);
                if (user && profile.username === user.username) {
                    setIsUserProfile(true);
                    setBlogPostsHeader('Your Blog Posts');
                }
                else {
                    setBlogPostsHeader(profile.firstName + `'s Blog Posts`);
                }
            });
    }, [props.match.params]);

    const changePassword = (event) => {
        event.preventDefault();
        if (!currentPassword) {
            setPasswordErr('Incorrect Password');
            currentPasswordRef.current.style.borderColor = 'red';
            passwordErrRef.current.style.display = 'block';
        }
        if (newPassword !== confirmPassword) {
            newPasswordRef.current.style.borderColor = 'red';
            confirmPasswordRef.current.style.borderColor = 'red';
            mismatchErrRef.current.style.display = 'block';
        }
        else if (currentPassword && newPassword === currentPassword) {
            setPasswordErr('Cannot Reuse Old Password');
            passwordErrRef.current.style.display = 'block';
            currentPasswordRef.current.style.borderColor = 'red';
            newPasswordRef.current.style.borderColor = 'red';
            confirmPasswordRef.current.style.borderColor = 'red';
        }
        else if (currentPassword) {
            const updatedUser = {
                    email: newPassword,
                    username: user.username,
                    password: currentPassword,
                },
                requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedUser)
                };
            fetch('http://localhost:8088/user/changePassword/', requestOptions)
                .then(res => res.json())
                .then(success => {
                    if (success) {
                        //add success modal popup
                    }
                    else {
                        setPasswordErr('Incorrect Password');
                        //currentPasswordRef.current.style.borderColor = 'red';
                        //passwordErrRef.current.style.display = 'block';
                    }
                })
        }
    }

    const clearPasswordErr = () => {
        currentPasswordRef.current.style.borderColor = 'grey';
        passwordErrRef.current.style.display = 'none';
    }

    const clearMismatchErr = () => {
        newPasswordRef.current.style.borderColor = 'grey';
        confirmPasswordRef.current.style.borderColor = 'grey';
        mismatchErrRef.current.style.display = 'none';
    }

    return (
        <div className='profile'>
            <div className='account-container row'>
                <div className='profile-photo col-md-4'>
                    <img src={accountIcon}/>
                </div>
                <div className='profile-body col-md-8'>
                    <h1>{profile.firstName} {profile.lastName}</h1>
                    <div>
                        <span className='profile-username'>
                            Username: {profile.username}
                        </span>
                        {isUserProfile && <>
                            <br/>
                            <button className='btn submit' onClick={() => setShowChangePassword(true)}>
                                Change Password
                            </button>
                            <Modal show={showChangePassword} onHide={() => setShowChangePassword(false)}
                                data-backdrop="true">
                                <Modal.Header className='new-post-modal-header' closeButton>
                                    Change Password
                                </Modal.Header>
                                <Modal.Body> 
                                <div className='change-password-field'>
                                    <span className='error-msg' ref={passwordErrRef}>
                                        {passwordErr}
                                    </span>  
                                    <span ref={currentPasswordRef} className='account-input'>
                                        <input value={currentPassword} placeholder='Current Password' 
                                            onFocus={clearPasswordErr} type='password'
                                            onChange={(event) => setCurrentPassword(event.target.value)}/>
                                    </span>
                                </div>
                                <div className='change-password-field'>
                                    <span className='error-msg' ref={mismatchErrRef}>
                                        Passwords Do Not Match
                                    </span> 
                                    <span ref={newPasswordRef} className='account-input'>
                                        <input value={newPassword} placeholder='New Password'
                                            onFocus={clearMismatchErr} type='password'
                                            onChange={(event) => setNewPassword(event.target.value)} />
                                    </span>
                                </div>
                                <div className='change-password-field'>
                                    <span ref={confirmPasswordRef} className='account-input'>
                                        <input value={confirmPassword} placeholder='Confirm New Password'
                                            onFocus={clearMismatchErr} type='password'
                                            onChange={(event) => setConfirmPassword(event.target.value)}/>
                                    </span>
                                </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <a href='#' onClick={() => setShowChangePassword(false)}>
                                        Cancel
                                    </a>
                                    <button className="btn submit" onClick={changePassword}>
                                        Change Password
                                    </button>
                                </Modal.Footer>
                            </Modal>
                        </>}
                    </div>
                </div>
            </div>
            <div className='profile-posts'>
                <PostsByUser username={profile.username} header={blogPostsHeader}/>
            </div>
        </div>
    );
}

export default Profile;