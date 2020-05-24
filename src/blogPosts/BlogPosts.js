import React, { Component, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './BlogPosts.scss';
import AllPosts from './allPosts/AllPosts.js';
import PostsByUser from './postsByUser/PostsByUser.js';
import NewPost from './newPost/NewPost';
import { UserContext } from '../context/UserContext';

function BlogPosts(props) {

    const user = useContext(UserContext);

    return (
      <div className="blog-posts container">
          <Switch>
              <Route path="/blog-posts/all" component={AllPosts}/>
              <Route path="/blog-posts/user" 
                render={(props) => <PostsByUser {...props} username={user ? user.username: ''} header='Your Posts'/> }
              />
              <Route path="/blog-posts/new" 
                render={(props) => <NewPost {...props} fullPage='true'/> }
              />
          </Switch>
      </div>
    );
}

export default BlogPosts;