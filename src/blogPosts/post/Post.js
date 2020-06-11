import React, { useState, useEffect, useContext, useRef } from 'react';
import './Post.scss';
import NewComment from './newComment/NewComment';
import Comment from './comment/Comment';
import commenticon from '../../commenticon.png';
import { formatDate } from '../../Helpers';
import { UserContext } from '../../context/UserContext';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import NewPost from '../newPost/NewPost.js';

function Post (props){
    
    const [comments, setComments] = useState([]),
        [date, setDate] = useState(''),
        [commentCount, setCommentCount] = useState(props.post.commentCount),
        [isLoaded, setIsLoaded] = useState(false),
        [editMenu, setEditMenu] = useState('edit-menu d-none'),
        [isUserPost, setIsUserPost] = useState(false),
        [showDeleteModal, setShowDeleteModal] = useState(false),
        [showEditModal, setShowEditModal] = useState(false),
        user = /*{username: 'tairey'}*/useContext(UserContext);

    let [commentSectionStyle, setCommentSectionStyle] = useState('comment-section d-none');
    
    const [showCommentSection, setShowCommentSection] = useState(false);

    const isSmall = useMediaQuery({ query: '(max-width: 768px)'})

    useEffect(() => {
        setDate(formatDate(props.post.submitted));
    }, []);

    useEffect(() => {
        if (user) {
            user.username === props.post.username && setIsUserPost(true);
        }
    },[user]);

    const addComment = (comment) => {
        const newComments = comments.concat(<Comment deleteComment={deleteComment} comment={comment}/>);
        setComments(newComments);
        setCommentCount(commentCount + 1);
    }

    const deleteComment = () => {
        //setCommentCount(commentCount);
        fetchComments();
    }

    const fetchComments = () => {
        fetch('http://localhost:8088/comments/' + props.post.id)
                .then(res => res.json())
                .then(res => {
                    const comments = [];
                    if (res.length) {
                        for (const [index, comment] of res.entries()) {
                            comments.push(<Comment key={index} deleteComment={deleteComment} comment={comment}/>);
                        }
                        setComments(comments);
                    }
                    else if (!user) {
                        setComments('No user comments');
                    }
                    setIsLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                });
    }

    const toggleCommentSection = () => {
        if (showCommentSection) {
            setCommentSectionStyle(commentSectionStyle + ' d-none');
        }
        else {
            setCommentSectionStyle(commentSectionStyle.substring(0, commentSectionStyle.length-7));
        }
        setShowCommentSection(!showCommentSection);
    }

    const toggleComments = () => {
        toggleCommentSection();
        if (!commentCount && !user) {
            setComments('No comments');
            setIsLoaded(true);
            return;
        }
        else if (!showCommentSection && commentCount) {
            fetchComments();
        }
        else {
            setComments([]);
            setIsLoaded(true);
            return false;
        }
    }

    const deletePost = () => {
        fetch('http://localhost:8088/posts/deletePost/' + props.post.id)
            .then(res => res.json())
            .then(res => {
                //success
                setShowDeleteModal(false);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const showEditMenu = () => {
        if (/\s/g.test(editMenu)) {
            setEditMenu(editMenu.slice(0,-7));
        }
    }

    const hideEditMenu = () => {
        if (!/\s/g.test(editMenu)) {
            setEditMenu(editMenu + ' d-none');
        }
    }
        
    const post = props.post;
    return (
        <div className='post-container'>
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='link' onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deletePost}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPost currentPost={post} close={() => setShowEditModal(false)}/>
                </Modal.Body>
            </Modal>
            <div className='post box' onMouseEnter={showEditMenu} onMouseLeave={hideEditMenu}>
                {isUserPost &&
                    <span className={editMenu}>
                        <BsPencil onClick={() => setShowEditModal(true)}/> 
                        <AiFillDelete onClick={() => setShowDeleteModal(true)}/>
                    </span>
                }
                <div className='post-header'>
                    {!isSmall && <>
                        <Link to={'/profile/' + post.username} className='author'>{post.username}</Link>
                    </>}
                    <h4><strong>{post.title}</strong></h4>
                    {isSmall && <>
                        <div className='author'>
                            <Link to={'/profile/' + post.username}>{post.username}</Link>
                        </div>
                    </>}
                </div>
                <hr/>
                <p>
                    {post.body}
                </p>
                <br/>
                <div className='post-footer'>
                    <span className='comment-section' onClick={toggleComments}>
                        <img className='comment-icon' src={commenticon}/>
                        Comments ({commentCount})
                    </span>
                    <span className='post-date'>{date}</span>
                </div>
            </div>
            <div className={commentSectionStyle}>
                {user &&
                    <NewComment postID={post.id} addComment={addComment}/>
                }  
                {isLoaded ?
                    comments :
                    <div className='text-center'>
                        <div className='spinner-grow' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
  
export default Post;