import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './BlogPosts.scss';
import AllPosts from './allPosts/AllPosts.js';
import PostsByUser from './postsByUser/PostsByUser.js';
import NewPost from './newPost/NewPost';
import { UserContext } from '../context/UserContext';
import SuccessModal from '../alertModals/SuccessModal';
import searchIcon from '../searchicon.png';

function BlogPosts(props) {

    const user = useContext(UserContext),
          [successModal, setSuccessModal] = useState(false),
          [searchInput, setSearchInput] = useState('');
          

    const showSuccessModal = () => {
        setSuccessModal(true);
    }

    return (
      <div className="blog-posts">
          {successModal && <>
              <SuccessModal message='Successfully submitted post!'/>
              <div className='FAQ-search'>
                <img src={searchIcon} className='search-prompt' alt='searc'/> 
                <input className='FAQ-search-input' placeholder='Search...' 
                  value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
              </div>
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