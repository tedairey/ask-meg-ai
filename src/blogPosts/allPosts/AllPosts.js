import React, { Component } from 'react';
import './AllPosts.css';
import Post from '../post/Post';

class AllPosts extends Component {
    constructor(props){
      super(props) 
      this.state = {
        
      }

    }

    componentDidMount () {
      fetch('http://localhost:8088/posts/')
        .then(res => res.json())
        .then(res => {
          const posts = [];
          if (res.length == 0) {
            posts.push(<h4 className='blog-posts-header'>No Recent Posts</h4>);
          }
          else {
            for (const [index, post] of res.entries()) {
              posts.push(<li key={index}><Post post={post}/></li>);
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
        <div className="all-posts container">
          <h1 className="blog-posts-header">
            Recent Posts
          </h1>
          <ul className='posts-list'>
            {this.state.posts}
          </ul>
        </div>
      );
    }
}

export default AllPosts;