import React, { useContext, useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import pen from '../../pen.png';
import './PostsByUser.scss';
import Post from '../post/Post';
import NewPost from '../newPost/NewPost';
import { UserContext } from '../../context/UserContext';
import { scrollTop } from '../../Helpers';

function PostsByUser(props) {
    const [currentPage, setCurrentPage] = useState(1),
        [posts, setPosts] = useState([]),
        [showNewPostModal, setShowNewPostModal] = useState(false),
        [isLoaded, setIsLoaded] = useState(false),
        [firstPostId, setFirstPostId] = useState(''),
        [lastPostId, setLastPostId] = useState(''),
        newPostMsgPanel = useRef(),
        user = useContext(UserContext),
        spinner = useRef(),
        [count, setCount] = useState(0),
        [isUserPosts, setIsUserPosts] = useState(false);

    //load timeout
    useEffect(() => {
      const loadingTimer = setTimeout(() => {
        if (!isLoaded) {
            setIsLoaded(true);
            setPosts('Error Loading Posts');
        }
      }, 10000);
      
      return () => {clearTimeout(loadingTimer)}
    }, [isLoaded]);

    //fetch count of posts
    useEffect(() => {
      if (props.username) {
        if (user) {
          user.username === props.username && setIsUserPosts(true)
        };
        fetch('http://localhost:8088/posts/count/user/' + props.username)
          .then(res => res.json())
          .then(res => {
            setCount(res);
            fetchPosts(0,0);
          })
          .catch(err => {
            console.log(err);
          })
      }
    }, [props.username, user])

    const fetchPosts = (ref, direction) => {
      setIsLoaded(false);
      const username = props.username;
      fetch('http://localhost:8088/posts/' + username + '/' + ref + '/' + direction)
          .then(res => res.json())
          .then(res => {
            const posts = [];
            if (res.length === 0) {
              posts.push(<h4 className='blog-posts-header'>No User Posts</h4>);
            }
            else {
              for (const [index, post] of res.entries()) {
                posts.push(<li key={index}>
                  <Post post={post} deletePost={deletePost}/>
                </li>);
              }
            }
            setFirstPostId(res[0].id);
            setLastPostId(res[posts.length-1].id);
            setPosts(posts);
            setIsLoaded(true);
          })
          .catch(err => {
            console.log(err);
          });
    }

    const changePage = (event) => {
      let pageSelected = event.target.innerText;
      switch (pageSelected) {
        case 'Next':
          setCurrentPage(currentPage + 1);
          fetchPosts(lastPostId, pageSelected);
          break;
        case 'Prev':
          setCurrentPage(currentPage - 1);
          fetchPosts(firstPostId, pageSelected);
          break;
        default:
          pageSelected = parseInt(pageSelected);
          break;
      }
      scrollTop();
    }

    const showNewPostMessage = () => {
      newPostMsgPanel.current.style.width = '175px';
    }

    const hideNewPostMessage = () => {
      newPostMsgPanel.current.style.width = '0px';
    }

    const addPost = () => {
        fetchPosts(0,0);
    }

    const deletePost = (postId) => {
        fetch('http://localhost:8088/posts/deletePost/' + postId)
          .then(res => res.json())
          .then(res => {
              fetchPosts(0,0);
          })
          .catch(err => {
              console.log(err);
          });
    }
    
    if (props.username)
      return (
        <div className='posts-by-user'>
          <h1 className='blog-posts-header'>
            {props.header}
          </h1>
          { isLoaded ?
            <div className='posts-body'> 
              <ul className='posts-list'>
                {posts}
              </ul>
              <div className='page-control'>
                <span>
                  {count > 10 && currentPage !== 1 &&
                    <button key='prev' className='page-button prev' onClick={changePage}>Prev</button>
                  }
                  {count > 10 && (Math.ceil(count / 10) >= currentPage + 1) &&
                    <button key='next' className='page-button next' onClick={changePage}>Next</button>
                  }
                </span>
              </div>
            </div> :
            <div className='text-center'>
              <div ref={spinner} className='spinner-grow' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          }
          { showNewPostModal ? 
            <Modal show={showNewPostModal} onHide={() => setShowNewPostModal(false)}>
              <Modal.Header className='new-post-modal-header' closeButton>
                New Post
              </Modal.Header>
              <Modal.Body>   
                <NewPost showModal={setShowNewPostModal} showSuccessModal={props.showSuccessModal} addPost={addPost}/> 
              </Modal.Body>
            </Modal> : isUserPosts &&
            <div onMouseLeave={hideNewPostMessage} 
              onClick={() => {setShowNewPostModal(true); hideNewPostMessage()}}>
              <div ref={newPostMsgPanel} className='new-post-hover'>
                Create New Post
              </div>
              <div className='new-post-button'>
                <img src={pen} className='show-new-post' onMouseEnter={showNewPostMessage}/>
              </div>
            </div>
          }
        </div>
      );
    return (
      <div className='my-posts'>
        <h1 className='blog-posts-header'>
          You are not logged in
        </h1>
      </div>
    );
}

export default PostsByUser;