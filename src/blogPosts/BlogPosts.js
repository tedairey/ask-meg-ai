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

    componentWillMount() {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
          this.setState({loggedIn: true});
          this.setState({username: user.username});
          this.setState({name: user.firstName + " " + user.lastName});
      }
    }

    render(){
      return (
        <div className="blog-posts">
            <Switch>
                <Route path="/blog-posts/all" 
                  render={(props) => <AllPosts {...props} loggedIn={this.state.loggedIn}
                          name={this.state.name} username={this.state.username}/> }
                />
                <Route path="/blog-posts/my" 
                  render={(props) => <MyPosts {...props} loggedIn={this.state.loggedIn}
                          name={this.state.name} username={this.state.username}/> }
                />
                <Route path="/blog-posts/new" 
                  render={(props) => <NewPost {...props} loggedIn={this.state.loggedIn}
                          name={this.state.name} username={this.state.username}/> }
                />
            </Switch>
        </div>
      );
    }
}

export default BlogPosts;