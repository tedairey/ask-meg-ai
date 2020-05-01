import React, { Component } from 'react';
import './MyPosts.css';
import Post from '../post/Post';
import NewPost from '../newPost/NewPost';

class Myposts extends Component {
    constructor(props){
        super(props) 
        this.state = {
          
        }
    }

    componentDidMount () {
      this.setState({loggedIn: this.props.loggedIn});
      this.setState({username: this.props.username});
      fetch('http://localhost:8088/posts/' + this.props.username)
        .then(res => res.json())
        .then(res => {
          const posts = [];
          if (res.length === 0) {
            posts.push(<h4 className='blog-posts-header'>No User Posts</h4>);
          }
          else {
            for (const [index, post] of res.entries()) {
              post.username = '';
              posts.push(<li key={index}><Post post={post}/></li>);
            }
          }
          this.setState({posts: posts});
        })
        .catch(err => {
          console.log(err);
        }); 
    }

    addPost = (post) => {
      this.setState(state => {
        const posts = state.posts.concat(<Post post={post}/>);
  
        return {
          posts
        };
      });
    }

    render(){
      if (this.state.loggedIn) {
        return (
          <div className="my-posts container">
            <h1 className="blog-posts-header">
              Your posts
            </h1>
            <ul className='posts-list'>
              {this.state.posts}
            </ul>
            <NewPost loggedIn={this.props.loggedIn} name={this.props.name} username={this.props.username}
                      addPost={this.addPost}/>
          </div>
        );
      }
      return (
        <div className='my-posts container'>
          <h1 className='blog-posts-header'>
            You are not logged in
          </h1>
        </div>
      );
    }
}

export default Myposts;