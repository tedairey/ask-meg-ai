import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './BlogPosts.css';
import AllPosts from './allPosts/AllPosts.js';
import MyPosts from './myPosts/MyPosts.js';
import NewPost from './newPost/NewPost';

function BlogPosts(props) {

    useEffect(() => {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
          this.setState({loggedIn: true});
          this.setState({username: user.username});
          this.setState({name: user.firstName + " " + user.lastName});
      }
    },[]);
    
    return (
      <div className="blog-posts">
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