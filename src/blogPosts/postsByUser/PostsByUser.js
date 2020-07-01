import React, { useContext, useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import pen from '../../pen.png';
import './PostsByUser.scss';
import Post from '../post/Post';
import NewPost from '../newPost/NewPost';
import { UserContext } from '../../context/UserContext';
import { scrollTop } from '../../Helpers';

function PostsByUser(props) {
    const [pages, setPages] = useState([]),
        [currentPage, setCurrentPage] = useState(1),
        [posts, setPosts] = useState([]),
        [showNewPostModal, setShowNewPostModal] = useState(false),
        [isLoaded, setIsLoaded] = useState(false),
        newPostMsgPanel = useRef(),
        user = useContext(UserContext),
        spinner = useRef(),
        count = useRef(0),
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
        fetch('http://localhost:8088/posts/count/' + props.username)
          .then(res => res.json())
          .then(res => {
            count.current = res;
            res > 10 && setPagination(Math.ceil(res/10));
          })
          .catch(err => {
            console.log(err);
          })
      }
    }, [props.username, user])

    //fetch posts per page
    useEffect(() => {
      if (props.username) {
        setIsLoaded(false);
        const username = props.username;
        fetch('http://localhost:8088/posts/' + username + '/' + currentPage)
          .then(res => res.json())
          .then(res => {
            const posts = [];
            if (res.length === 0) {
              posts.push(<h4 className='blog-posts-header'>No User Posts</h4>);
            }
            else {
              for (const [index, post] of res.entries()) {
                posts.push(<li key={index}><Post loggedIn={user ? true: false} post={post}/></li>);
              }
            }
            setPosts(posts);
            setIsLoaded(true);
          })
          .catch(err => {
            console.log(err);
          });
        }
    }, [user, currentPage]);

    const setPagination = (totalPages) => {
      let pages = [];
      pages.push(<button key='prev' className='page-button prev' onClick={changePage}>Prev</button>)
      for (let index = 1; index <= totalPages; index++) {
        index === currentPage ?
        pages.push(<button key={index} className='page-button active' onClick={changePage}>{index}</button>) :
        pages.push(<button key={index} className='page-button' onClick={changePage}>{index}</button>)
      }
      pages.push(<button key='next' className='page-button next' onClick={changePage}>Next</button>)
      setPages(pages);
    }

    const changePage = (event) => {
      let selectedButton = event.target,
        pageSelected = selectedButton.innerText;
      switch (pageSelected) {
        case 'Next':
          pageSelected = Math.ceil(count / 10) >= currentPage + 1 ? currentPage + 1 : currentPage;
          selectedButton = selectedButton.parentElement.children[pageSelected];
          break;
        case 'Prev':
          pageSelected = currentPage - 1 || currentPage;
          selectedButton = selectedButton.parentElement.children[pageSelected];
          break;
        default:
          pageSelected = parseInt(pageSelected);
          break;
      }
      if (pageSelected !== currentPage) {
        selectedButton.classList.add('active');
        selectedButton.parentElement.children[currentPage].classList.remove('active');
        setCurrentPage(pageSelected);
        scrollTop();
      }
    }

    const showNewPostMessage = () => {
      newPostMsgPanel.current.style.width = '175px';
    }

    const hideNewPostMessage = () => {
      newPostMsgPanel.current.style.width = '0px';
    }

    const addPost = (post) => {
        const newPosts = posts;
        newPosts.unshift(<li key={count + 1}><Post loggedIn={user ? true: false} post={post}/></li>);
        setPosts(newPosts);
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
                  {pages}
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