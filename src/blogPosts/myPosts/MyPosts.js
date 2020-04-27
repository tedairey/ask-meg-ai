import React, { Component } from 'react';
import './MyPosts.css';
import Post from '../post/Post';
import NewPost from '../newPost/NewPost';

class MyPosts extends Component {
    constructor(props){
        super(props) 
        this.state = {
          username: 'tairey'
        }
    }

    componentDidMount () {
      fetch('http://localhost:8088/posts/' + this.state.username)
        .then(res => res.json())
        .then(res => {
          const posts = [];
          if (res.length == 0) {
            posts.push(<h4 className='blog-posts-header'>No User Posts</h4>);
          }
          else {
            for (const post of res) {
              posts.push(<ul className='posts-list'><Post post={post}/></ul>);
            }
          }
          this.setState({posts: posts});
        })
        .catch(err => {
          console.log(err);
        });
    }

    render(){
      return (
        <div className="my-posts container">
          <h1 className="blog-posts-header">
            Your Posts
          </h1>
          <div>
            {this.state.posts}
          </div>
          <NewPost/>
        </div>
      );
    }
}

export default MyPosts;