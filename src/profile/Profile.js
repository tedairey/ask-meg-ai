import React, {useState, useEffect, useContext} from 'react';
import './Profile.scss';
import accountIcon from '../accounticon.png';

import { UserContext } from '../context/UserContext';
import PostsByUser from '../blogPosts/postsByUser/PostsByUser';

function Profile(props) {
  
    const user = useContext(UserContext),
        [profile, setProfile] = useState({}),
        [isUserProfile, setIsUserProfile] = useState(false),
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
    }, []);

    return (
        <div className='profile'>
            <div className='account-container row'>
                <div className='profile-photo col-4'>
                    <img src={accountIcon}/>
                </div>
                <div className='col-8'>
                    <h1>{profile.firstName} {profile.lastName}</h1>
                    <div className='profile-body'>
                        <span className='profile-username'>
                            Username: {profile.username}
                        </span>
                        {isUserProfile && <>
                            <br/>
                            <button className='btn submit'>Change password</button>
                        </>}
                    </div>
                </div>
            </div>
            <div>
                <PostsByUser username={profile.username} header={blogPostsHeader}/>
            </div>
        </div>
    );
}

export default Profile;