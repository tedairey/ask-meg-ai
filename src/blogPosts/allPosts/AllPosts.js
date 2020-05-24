import React, { useEffect, useRef, useState } from 'react';
import './AllPosts.scss';
import Post from '../post/Post';
import { scrollTop } from '../../Helpers';

function AllPosts (props) {

  const [posts, setPosts] = useState([]),
    [pages, setPages] = useState([]),
    spinner = useRef(),
    [count, setCount] = useState(0),
    [isLoaded, setIsLoaded] = useState(false),
    [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:8088/posts/count/')
      .then(res => res.json())
      .then(res => {
        setCount(res);
        res > 10 && setPagination(Math.ceil(res/10));
        getPosts(currentPage);
      })
      .catch(err => {
        console.log(err);
      })
  },[])

  const getPosts = (pageNumber) => {
    setPosts([]);
    setIsLoaded(false);
    fetch('http://localhost:8088/posts/page/' + pageNumber)
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
        setPosts(posts);
        setIsLoaded(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
      getPosts(pageSelected);
      scrollTop();
    }
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
          {pages}
        </span>
      </div> 
    </div>
  );
}

export default AllPosts;