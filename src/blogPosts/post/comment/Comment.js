import React, { useState, useContext, useEffect } from 'react';
import './Comment.scss';
import { formatDate } from '../../../Helpers';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { UserContext } from '../../../context/UserContext';
import { Modal, Button } from 'react-bootstrap';
import NewComment from '../newComment/NewComment';

function Comment (props) {

    const [date, setDate] = useState(formatDate(props.comment.submitted)),
        [editMenu, setEditMenu] = useState('edit-menu d-none'),
        [isUserComment, setIsUserComment] = useState(false),
        [isEditingComment, setIsEditingComment] = useState(false),
        [showDeleteModal, setShowDeleteModal] = useState(false),
        user = /*{username: 'tairey'}*/useContext(UserContext);

    useEffect(() => {
        if (user) {
            user.username === props.comment.username && setIsUserComment(true);
        }
    },[user]);

    const showEditMenu = () => {
        setEditMenu(editMenu.slice(0,-7));
    }

    const hideEditMenu = () => {
        setEditMenu(editMenu + ' d-none');
    }

    const editComment = () => {
        setIsEditingComment(true);
    }

    const updateComment = () => {
        setIsEditingComment(false);
        hideEditMenu();
    }

    const deleteComment = () => {
        fetch('http://localhost:8088/deleteComment/' + props.comment.id)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setShowDeleteModal(false);
                    props.deleteComment();
                    //successfully deleted comment
                    //updatecomment
                }
            })
    }

    return (
        <div className='comment-container'>
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='link' onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteComment}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            {!isEditingComment ?
                <div className='comment' onMouseEnter={isUserComment ? showEditMenu : null} 
                onMouseLeave={isUserComment ? hideEditMenu : null}>
                    <div className='comment-name'>
                        <Link to={`/profile/` + props.comment.username}>{props.comment.username}</Link>
                    </div>
                    <div className='comment-date'>
                        {date} 
                        <span className={editMenu}>
                            <BsPencil onClick={editComment}/> 
                            <AiFillDelete onClick={() => setShowDeleteModal(true)}/>
                        </span>
                    </div>
                    <hr/>
                    <div className='comment-body'>
                        {props.comment.body}
                    </div>
                </div> :
                <div>
                    <NewComment currentComment={props.comment} postID={props.comment.postID} 
                                addComment={updateComment}/>
                </div>
            }
        </div>
    );
}
  
export default Comment;