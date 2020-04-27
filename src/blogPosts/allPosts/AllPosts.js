import React, { Component } from 'react';
import './AllPosts.css';
import Post from '../post/Post';

class AllPosts extends Component {
    constructor(props){
      super(props) 
      this.state = {
        username: 'pairey'
      }

    }

    componentDidMount () {
      fetch('http://localhost:8088/posts/')
        .then(res => res.json())
        .then(res => {
          const posts = [];
          console.log(res);
          for (const post of res) {
            posts.push(<ul className='posts-list'><Post post={post}/></ul>);
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
          {this.state.posts}
        </div>
      );
    }
}

export default AllPosts;