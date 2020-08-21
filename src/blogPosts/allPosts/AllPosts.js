import React, { useEffect, useRef, useState } from 'react';
import './AllPosts.scss';
import Post from '../post/Post';
import { scrollTop } from '../../Helpers';
import firebase from '../../config/Fire';

function AllPosts (props) {

  const [posts, setPosts] = useState([]),
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
    let db = firebase.firestore();
    let postRef = db.collection('Posts');

    postRef.orderBy('timestamp', 'desc').limit(10)
      .get()
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
        setCurrentPage(0);
        setIsLoaded(true);
      })  
      .catch(err => {
        console.log("Error getting document:", err);
      });
  }

  const prevPage = () => {
    setIsLoaded(false);
    let db = firebase.firestore();
    let postRef = db.collection('Posts');

    postRef.orderBy('timestamp', 'desc').endBefore(firstPostId).limit(10)
      .get()
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
    let db = firebase.firestore();
    let postRef = db.collection('Posts');

    postRef.orderBy('timestamp', 'desc').startAfter(lastPostId).limit(10)
      .get()
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
    let db = firebase.firestore();

    db.collection('Posts').doc(postId).delete()
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