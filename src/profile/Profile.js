import React, {useState, useEffect, useContext, useRef} from 'react';
import './Profile.scss';
import { Modal } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import PostsByUser from '../blogPosts/postsByUser/PostsByUser';
import { RiAccountCircleLine } from 'react-icons/ri';
import firebase from 'firebase';

function Profile(props) {
  
    const user = useContext(UserContext),
        [authUser, setAuthUser] = useState(null),
        [profileUsername, setProfileUsername] = useState(props.match.params.handle),
        [isUserProfile, setIsUserProfile] = useState(false),
        [showChangePassword, setShowChangePassword] = useState(false),
        [progressUrl, setProgressUrl] = useState(''),
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
        if (user && user.username === profileUsername) {
            setIsUserProfile(true);
            setBlogPostsHeader('Your Blog Posts');
        }
        else {
            setBlogPostsHeader(profileUsername + `'s Blog Posts`);
        }
    }, [props.match.params]);

    useEffect(() => {
        if (isUserProfile) {
            fetch('http://localhost:8088/user/webpage/' + user.username)
                .then(res => res.text())
                .then(res => {
                    setProgressUrl(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [isUserProfile])

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
            const user = firebase.auth().currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(
                user.email, 
                currentPassword
            );
            user.reauthenticateWithCredential(credential)
                .then(success => {
                    user.updatePassword(newPassword)
                        .then(function() {
                            setCurrentPassword('');
                            setNewPassword('');
                            setConfirmPassword('');
                            setShowChangePassword(false);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                })
                .catch(err => {
                    setPasswordErr('Incorrect Password');
                    currentPasswordRef.current.style.borderColor = 'red';
                    passwordErrRef.current.style.display = 'block';
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
                <div className='profile-photo col-md-4' style={{color: '#21a1af'}}>
                    <RiAccountCircleLine size='lg'/>
                </div>
                <div className='profile-body col-md-8'>
                <h1>{profileUsername}</h1>
                    <div>
                    { isUserProfile && <>
                            <button className='btn submit' onClick={() => setShowChangePassword(true)}>
                                Change Password
                            </button>
                            <br/>
                            <a className='progress-page-link' href={progressUrl} target='_blank'>
                                View Progress Page
                            </a>
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
                <PostsByUser username={profileUsername} header={blogPostsHeader}/>
            </div>
        </div>
    );
}

export default Profile;