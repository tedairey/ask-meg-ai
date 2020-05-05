import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import pen from '../../pen.png';
import './MyPosts.css';
import Post from '../post/Post';
import NewPost from '../newPost/NewPost';
import { UserContext } from '../../context/UserContext';

function MyPosts(props) {
    const [posts, setPosts] = useState([]),
        [showNewPostModal, setShowNewPostModal] = useState(false),
        user = useContext(UserContext),
        [newPostMessage, setNewPostMessage] = useState('new-post-hover d-none');

    useEffect(() => {
      if(user) {
        fetch('http://localhost:8088/posts/' + user.username)
          .then(res => res.json())
          .then(res => {
            const posts = [];
            if (res.length === 0) {
              posts.push(<h4 className='blog-posts-header'>No User Posts</h4>);
            }
            else {
              for (const [index, post] of res.entries()) {
                post.username = '';
                posts.push(<li key={index}><Post loggedIn={user ? true: false} post={post}/></li>);
              }
            }
            setPosts(posts);
          })
          .catch(err => {
            console.log(err);
          }); 
      }
    }, [user]);

    const showNewPostMessage = () => {
      setNewPostMessage(newPostMessage.substring(0, newPostMessage.length-7));
    }

    const hideNewPostMessage = () => {
      setNewPostMessage(newPostMessage + ' d-none');
    }

    const addPost = (post) => {
        const newPosts = posts.concat(<Post loggedIn={user ? true: false} post={post}/>);
        setPosts(newPosts);
    }

    if (user) 
      return (
          <div className="my-posts">
            <h1 className="blog-posts-header">
              Your posts
            </h1>
            <ul className='posts-list'>
              {posts}
            </ul>
            {showNewPostModal ? 
              <Modal show={showNewPostModal} onHide={() => setShowNewPostModal(false)}>
                <Modal.Header className='new-post-modal-header' closeButton>
                  New Post
                </Modal.Header>
                <Modal.Body>   
                  <NewPost showModal={setShowNewPostModal} addPost={addPost}/> 
                </Modal.Body>
              </Modal> :
              <div className='new-post-button' onMouseLeave={hideNewPostMessage} 
                   onClick={() => {setShowNewPostModal(true); hideNewPostMessage()}}>
                <span className={newPostMessage}>
                  Create New Post
                </span>
                <img src={pen} className='show-new-post' onMouseEnter={showNewPostMessage}/>
              </div>
            }
          </div>
      );
      return (
        <div className='my-posts container'>
          <h1 className='blog-posts-header'>
            You are not logged in
          </h1>
        </div>
      );
}

export default MyPosts;