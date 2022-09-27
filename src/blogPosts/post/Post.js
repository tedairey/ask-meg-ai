import React, { useState, useEffect, useContext } from 'react';
import './Post.scss';
import NewComment from './newComment/NewComment';
import Comment from './comment/Comment';
import commenticon from '../../commenticon.png';
import { formatDate, getTimestamp } from '../../Helpers';
import { AppUserContext, UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import NewPost from '../newPost/NewPost.js';
import { updatePost } from '../../config/service/PostService';

function Post (props){
    
    const [comments, setComments] = useState([]),
        [date, setDate] = useState(''),
        [commentCount, setCommentCount] = useState(props.post.comments.length),
        [isLoaded, setIsLoaded] = useState(false),
        [editMenu, setEditMenu] = useState('edit-menu d-none'),
        [isUserPost, setIsUserPost] = useState(false),
        [showDeleteModal, setShowDeleteModal] = useState(false),
        [showCommentSection, setShowCommentSection] = useState(false),
        [showEditModal, setShowEditModal] = useState(false),
        { user } = useContext(UserContext),
        { isAppUser } = useContext(AppUserContext);

    let [commentSectionStyle, setCommentSectionStyle] = useState('comment-section d-none');

    useEffect(() => {
        setDate(formatDate(props.post.timestamp));
        setCommentCount(props.post.comments.length);
    }, []);

    useEffect(() => {
        if (user) {
            user.username === props.post.username && setIsUserPost(true);
        }
    },[user]);

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
            setIsLoaded(true);
            return false;
        }
    }

    const fetchComments = (newComments) => {
        const commentsArr = [];
        if (!newComments && comments.length) {
            setIsLoaded(true);
        }
        else if (commentCount || newComments) {
            for (const [index, comment] of (newComments ? newComments.entries() : props.post.comments.entries())) {
                commentsArr.push(
                    <Comment key={index} index={index} deleteComment={deleteComment} 
                        comment={comment} postID={props.post.id} addComment={addComment}/>
                );
            }
            setComments(commentsArr);
            setCommentCount(commentsArr.length);
        }
        else if (!user) {
            setComments('No user comments');
        }
        setIsLoaded(true);
    }

    const deletePost = () => {
        setShowDeleteModal(false);
        props.deletePost(props.post.id);
    }

    const addComment = (comment, index) => {
        const newPost = props.post;
        if (index !== undefined) {
            newPost.comments[index] = comment;
        }
        else {
            comment.timestamp = getTimestamp();
            newPost.comments = props.post.comments.concat(comment);
        }
        updatePost(props.post.id, newPost)
            .then(res => {
                fetchComments(newPost.comments);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const deleteComment = (index) => {
        const newPost = props.post;
        newPost.comments.splice(index, 1);
        updatePost(props.post.id, newPost)
            .then(res => {
                fetchComments(newPost.comments);
            })
            .catch(err => {
                console.log(err);
            })
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
    
    const closeEditModal = () => {
        setShowEditModal(false);
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
                    <NewPost currentPost={post} close={closeEditModal}/>
                </Modal.Body>
            </Modal>
            <div className='post' onMouseEnter={showEditMenu} onMouseLeave={hideEditMenu}>
                <span className={editMenu}>
                    {isUserPost &&
                        <BsPencil size='20px' onClick={() => setShowEditModal(true)}/>
                    }
                    {((user && user.isAdmin) || isUserPost) &&
                        <AiFillDelete size='20px' onClick={() => setShowDeleteModal(true)}/>
                    }
                </span>
                <div className='post-header'>
                    <h4 className='post-title'><strong>{post.title}</strong></h4>
                    <div className='authors'>
                        By: {post.authors ? 
                            post.authors :
                            (isAppUser ? 
                                post.username : 
                                <Link to={'/profile/' + post.username}>{post.username}</Link>)
                            
                        }
                    </div>
                </div>
                <hr className='post-divider'/>
                <p className='post-body'>
                    {post.body}
                </p>
                <br/>
                <div className='post-footer'>
                    <span className='comment-section' onClick={toggleComments}>
                        <img className='comment-icon' src={commenticon} alt='comment icon'/>
                        Comments ({commentCount})
                    </span>
                    <span className='post-date'>{date}</span>
                </div>
            </div>
            <div className={commentSectionStyle}>
                {user && user.username &&
                    <NewComment postID={post.id} addComment={addComment}/>
                }  
                {isLoaded ?
                    comments :
                    <div className='text-center'>
                        <div className='spinner-grow' role='status'>
                            <span className='sr-only'></span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
  
export default Post;