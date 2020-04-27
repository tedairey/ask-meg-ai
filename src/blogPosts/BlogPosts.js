import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './BlogPosts.css';
import AllPosts from './allPosts/AllPosts.js';
import MyPosts from './myPosts/MyPosts.js';
import NewPost from './newPost/NewPost';

class BlogPosts extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    render(){
      return (
        <div className="blog-posts">
            <Router>
                <Switch>
                    <Route path="/blog-posts/all" component={AllPosts}/>
                    <Route path="/blog-posts/my" component={MyPosts}/>
                    <Route path="/blog-posts/new" component={NewPost}/>
                </Switch>
            </Router>
        </div>
      );
    }
}

export default BlogPosts;