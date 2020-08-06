import React, { useEffect, useRef, useState } from 'react';
import './AllPosts.scss';
import Post from '../post/Post';
import { scrollTop } from '../../Helpers';

function AllPosts (props) {

  const [posts, setPosts] = useState([]),
    spinner = useRef(),
    [count, setCount] = useState(0),
    [topic, setTopic] = useState(''),
    [isLoaded, setIsLoaded] = useState(false),
    [firstPostId, setFirstPostId] = useState(''),
    [lastPostId, setLastPostId] = useState(''),
    [currentPage, setCurrentPage] = useState(1);

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
    fetch('http://localhost:8088/posts/count/')
      .then(res => res.json())
      .then(res => {
        setCount(res);
        fetchPosts(0,0);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const fetchPosts = (ref, direction) => {
    setIsLoaded(false);
    fetch('http://localhost:8088/posts/page/' + ref + '/' + direction)
      .then(res => res.json())
      .then(res => {
        const posts = [];
        if (res.length === 0) {
          posts.push(<h4 className='blog-posts-header'>No Recent Posts</h4>);
        }
        else {
          for (const [index, post] of res.entries()) {
            posts.push(<li key={index}>
              <Post post={post} index={index} deletePost={deletePost}/>
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

  const onTopicChange = (event) => {
      const newTopic = event.target.value
      setTopic(newTopic);
      setIsLoaded(false);
      const request = newTopic && ('topic/' + newTopic); 
      fetch('http://localhost:8088/posts/' + request)
        .then(res => res.json())
        .then(res => {
          const posts = [];
          if (res.length === 0) {
            posts.push(<h4 className='blog-posts-header'>No Posts in this Topic</h4>);
          }
          else {
            for (const [index, post] of res.entries()) {
              posts.push(<li key={index}>
                <Post post={post} index={index} deletePost={deletePost}/>
              </li>);
            }
          }
          setPosts(posts);
          setIsLoaded(true);
        })
        .catch(err => {
          setPosts(<h4 className='blog-posts-header'>No User Posts</h4>);
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

  return (
    <div className='all-posts'>
      <h1 className='blog-posts-header'>
        Recent Posts
      </h1>
      <div className='topic-container'>
        Select A Topic:
        <select className='topic-select' value={topic} onChange={onTopicChange}>
            <option value=''>--</option>
            <option value='Weight Loss'>Weight Loss</option>
            <option value='Emotional Eating'>Emotional Eating</option>
            <option value='Motivating Stories'>Motivating Stories</option>
            <option value='Feedback to Meg'>Feedback to Meg</option>
            <option value='Healthy Lifestyle'>Healthy Lifestyle</option>
            <option value='Daily Exercise Challenge'>Daily Exercise Challenge</option>
            <option value="Dietitian's Corner">Dietitian's Corner</option>
        </select>
      </div>
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
          {count > 10 && currentPage !== 1 &&
            <button key='prev' className='page-button prev' onClick={changePage}>Prev</button>
          }
          {count > 10 && (Math.ceil(count / 10) >= currentPage + 1) &&
            <button key='next' className='page-button next' onClick={changePage}>Next</button>
          }
        </span>
      </div> 
    </div>
  );
}

export default AllPosts;