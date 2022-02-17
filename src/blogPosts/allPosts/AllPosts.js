import React, { useContext, useEffect, useRef, useState } from 'react';
import './AllPosts.scss';
import Post from '../post/Post';
import { Link } from 'react-router-dom';
import { scrollTop } from '../../Helpers';
import { getRecentPosts, getPrevPosts, getNextPosts, removePost } from '../../config/service/PostService';
import AccountModals from '../../header/accountModals/AccountModals';
import { AppUserContext, UserContext } from '../../context/UserContext';

function AllPosts (props) {

  const [posts, setPosts] = useState([]),
    {user} = useContext(UserContext),
    {isAppUser} = useContext(AppUserContext),
    spinner = useRef(),
    [count, setCount] = useState(0),
    [currentPage, setCurrentPage] = useState(0),
    [isLoaded, setIsLoaded] = useState(false),
    [firstPostId, setFirstPostId] = useState(''),
    [lastPostId, setLastPostId] = useState('');

  //load timeout
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true);
        setPosts('Error Loading Posts. Please try again later');
      }
    }, 10000);
    
    return () => {clearTimeout(loadingTimer)}
  }, [isLoaded]);

  //posts count
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setIsLoaded(false);
    getRecentPosts()
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
        index ? setPosts(posts) : setPosts(<h4 className='text-center'>No Recent Posts</h4>);
        setCurrentPage(0);
        setIsLoaded(true);
      })  
      .catch(err => {
        console.log("Error getting document:", err);
      });
  }

  const prevPage = () => {
    setIsLoaded(false);
    getPrevPosts(firstPostId)
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
        setPosts(posts);
        setCurrentPage(currentPage - 1);
        setIsLoaded(true);
        scrollTop();
      })  
      .catch(err => {
        console.log("Error getting document:", err);
      });
  }

  const nextPage = () => {
    setIsLoaded(false);
    getNextPosts(lastPostId)
      .then(querySnapshot => {
        if (querySnapshot.size) {
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
          setPosts(posts);
          setCurrentPage(currentPage + 1);
          setIsLoaded(true);
          scrollTop();
        }
        else {
          fetchPosts();
        }
      })  
      .catch(error => {
        console.log("Error getting document:", error);
      });
  }

  const deletePost = (postId) => {
    setIsLoaded(false);
    removePost(postId)
      .then(querySnapshot => {
        fetchPosts();
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='all-posts'>
      <h1 className='blog-posts-header'>
        Recent Posts
      </h1>
      { isAppUser && (user ? 
        <div className='blog-links'>
          <Link to={'/blog-posts/user/app-user'}>Your Posts</Link> | <Link to={'/blog-posts/new/app-user'}>New Post</Link>
        </div> :
        <div className='text-center'>
          Want to Post? <AccountModals isAppUser={isAppUser}/>
        </div>)
      }
      { isLoaded ? 
        <div className='posts-body'>
          <ul className='posts-list'>
            {posts}
          </ul>
        </div> :
        <div className='text-center'>
          <div ref={spinner} className='spinner-grow' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      }
      <div className='page-control'>
        <span>
          {currentPage !== 0 &&
            <button key='prev' className='page-button prev' onClick={prevPage}>Prev</button>
          }
          {count >= 10 && 
            <button key='next' className='page-button next' onClick={nextPage}>Next</button>
          }
        </span>
      </div> 
    </div>
  );
}

export default AllPosts;