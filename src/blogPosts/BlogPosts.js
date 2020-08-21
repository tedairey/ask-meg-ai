import React, { useState, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './BlogPosts.scss';
import AllPosts from './allPosts/AllPosts.js';
import PostsByUser from './postsByUser/PostsByUser.js';
import NewPost from './newPost/NewPost';
import { UserContext } from '../context/UserContext';
import SuccessModal from '../alertModals/SuccessModal';

function BlogPosts() {

    const user = useContext(UserContext),
          [successModal, setSuccessModal] = useState(false),
          [successModalMessage, setSuccessModalMessage] = useState('');

    const showSuccessModal = (message) => {
        setSuccessModalMessage(message);
        setSuccessModal(true);
    }

    useEffect(() => {
      if (successModal) {
        const modalTimer = setTimeout(() => {
            setSuccessModal(false);
        }, 1500);
      
        return () => {clearTimeout(modalTimer)}
      }
    }, [successModal]);

    return (
      <div className="blog-posts">
          {successModal && <>
              <SuccessModal message={successModalMessage}/>
          </>}
          <Switch>
              <Route path="/blog-posts/all" 
                render={(props) => <AllPosts {...props} 
                showSuccessModal={showSuccessModal}/>}
              />
              <Route path="/blog-posts/user" 
                render={(props) => <PostsByUser {...props} 
                username={user ? user.username: ''} 
                showSuccessModal={showSuccessModal}
                header='Your Posts'/> }
              />
              <Route path="/blog-posts/new" 
                render={(props) => <NewPost {...props} 
                    showSuccessModal={showSuccessModal} 
                    fullPage='true'/> }
              />
          </Switch>
      </div>
    );
}

export default BlogPosts;