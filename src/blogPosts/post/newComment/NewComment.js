import React, { useState, useContext } from 'react';
import './NewComment.css';
import { UserContext } from '../../../context/UserContext';

function NewComment (props) {

    const user = useContext(UserContext),
        [comment, setComment] = useState('');

    const submitComment = () => {
        if (comment && user) {
            const newComment = {
                postID: props.postID,
                body: comment,
                name: user.name
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment)
            };
            fetch('http://localhost:8088/newComment', requestOptions)
                .then(res => res.json())
                .then(res => {
                    setComment('');
                    props.addComment(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    const onCommentChange = (event) => {
        setComment(event.target.value);
    }

    return (
        <div className='new-comment'>
            <textarea value={comment} className='comment-input' 
                onChange={onCommentChange} placeholder='Add a comment...'/>
            <button className='btn submit' onClick={submitComment}>Submit</button>
        </div>
    );
}
  
export default NewComment;