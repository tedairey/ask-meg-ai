import React, { useContext, useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import pen from '../../pen.png';
import './PostsByUser.scss';
import Post from '../post/Post';
import NewPost from '../newPost/NewPost';
import { AppUserContext, UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { getRecentUserPosts, getPrevUserPosts, getNextUserPosts, removePost } from '../../config/service/PostService';

function PostsByUser(props) {
    const [currentPage, setCurrentPage] = useState(1),
        [posts, setPosts] = useState([]),
        [showNewPostModal, setShowNewPostModal] = useState(false),
        [isLoaded, setIsLoaded] = useState(false),
        [firstPostId, setFirstPostId] = useState(''),
        [lastPostId, setLastPostId] = useState(''),
        newPostMsgPanel = useRef(),
        { user } = useContext(UserContext),
        { isAppUser } = useContext(AppUserContext),
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
        fetchPosts();
      }
    }, [props.username, user])

    const fetchPosts = () => {
      setIsLoaded(false);
      getRecentUserPosts(props.username)
        .then(querySnapshot => {
          const posts = [];
          let index = 0;
          querySnapshot.forEach(doc => {
              let post = doc.data();
              post.id = doc.id;
              posts.push(<li key={index}>
                <Post post={post} index={index} deletePost={deletePost}/>
              </li>);
              if (index === 0) {
                setFirstPostId(doc);
              }
              if (index === querySnapshot.size - 1) {
                setLastPostId(doc);
              }
              setCount(querySnapshot.size);
              index++;
          });
          index ? setPosts(posts) : setPosts(<h4 className='text-center'>No User Posts</h4>);
          setCurrentPage(0);
          setIsLoaded(true);
        })  
        .catch(err => {
          console.log("Error getting document:", err);
        });
    }

    const prevPage = () => {
      setIsLoaded(false);
      getPrevUserPosts(props.username, firstPostId)
        .then(querySnapshot => {
          const posts = [];
          let index = 0;
          querySnapshot.forEach(doc => {
              let post = doc.data();
              post.id = doc.id;
              posts.push(<li key={index}>
                <Post post={post} index={index} deletePost={deletePost}/>
              </li>);
              if (index === 0) {
                setFirstPostId(doc);
              }
              if (index === querySnapshot.size - 1) {
                setLastPostId(doc);
              }
              setCount(querySnapshot.size);
              index++;
          });
          setCurrentPage(currentPage - 1);
          setPosts(posts);
          setIsLoaded(true);
        })  
        .catch(err => {
          console.log("Error getting document:", err);
        });
    }
  
    const nextPage = () => {
      setIsLoaded(false);
      getNextUserPosts(props.username, lastPostId)
        .then(querySnapshot => {
          const posts = [];
          let index = 0;
          querySnapshot.forEach(doc => {
              let post = doc.data();
              post.id = doc.id;
              posts.push(<li key={index}>
                <Post post={post} index={index} deletePost={deletePost}/>
              </li>);
              if (index === 0) {
                setFirstPostId(doc);
              }
              if (index === querySnapshot.size - 1) {
                setLastPostId(doc);
              }
              setCount(querySnapshot.size);
              index++;
          });
          setCurrentPage(currentPage + 1);
          setPosts(posts);
          setIsLoaded(true);
        })  
        .catch(err => {
          console.log("Error getting document:", err);
        });
    }

    const showNewPostMessage = () => {
      newPostMsgPanel.current.style.width = '175px';
    }

    const hideNewPostMessage = () => {
      newPostMsgPanel.current.style.width = '0px';
    }

    const addPost = () => {
        props.showSuccessModal('Post Submitted Successfully');
        fetchPosts(0,0);
    }

    const deletePost = (postId) => {
      setIsLoaded(false);
      removePost(postId)
        .then(res => {
          props.showSuccessModal('Deleted Post Successfully');
          fetchPosts();
        })
        .catch(err => {
          console.log('hello');
        })
    }
    
    if (props.username)
      return (
        <div className='posts-by-user'>
          <h1 className='blog-posts-header'>
            {props.header}
          </h1>
          { isAppUser &&  
            <div className='blog-links'>
              <Link to={'/blog-posts/all/app-user'}>Recent Posts</Link> | <Link to={'/blog-posts/new/app-user'}>New Post</Link>
            </div>
          }
          { isLoaded ?
            <div className='posts-body'> 
              <ul className='posts-list'>
                {posts}
              </ul>
              <div className='page-control'>
                <span>
                  {count > 10 && currentPage !== 1 &&
                    <button key='prev' className='page-button prev' onClick={prevPage}>Prev</button>
                  }
                  {count > 10 && (Math.ceil(count / 10) >= currentPage + 1) &&
                    <button key='next' className='page-button next' onClick={nextPage}>Next</button>
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
                <NewPost showModal={setShowNewPostModal} addPost={addPost}/> 
              </Modal.Body>
            </Modal> : isUserPosts &&
            <div onMouseLeave={hideNewPostMessage} 
              onClick={() => {setShowNewPostModal(true); hideNewPostMessage()}}>
              <div ref={newPostMsgPanel} className='new-post-hover'>
                Create New Post
              </div>
              <div className='new-post-button'>
                <img src={pen} className='show-new-post' onMouseEnter={showNewPostMessage} alt='create new post'/>
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