import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './BlogPosts.scss';
import AllPosts from './allPosts/AllPosts.js';
import MyPosts from './myPosts/MyPosts.js';
import NewPost from './newPost/NewPost';

function BlogPosts(props) {
    return (
      <div className="blog-posts container">
          <Switch>
              <Route path="/blog-posts/all" component={AllPosts}/>
              <Route path="/blog-posts/my" component={MyPosts}/>
              <Route path="/blog-posts/new" 
                render={(props) => <NewPost {...props} fullPage='true'/> }
              />
          </Switch>
      </div>
    );
}

export default BlogPosts;