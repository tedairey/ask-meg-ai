import React, { useState, useContext, useEffect, useRef } from 'react';
import './NewComment.scss';
import { UserContext } from '../../../context/UserContext';

function NewComment (props) {

    const user = useContext(UserContext),
        [comment, setComment] = useState('' || props.currentComment && props.currentComment.body),
        newComment=useRef(),
        [submitText, setSubmitText] = useState('Submit');

    useEffect(() => {
        if (props.currentComment) {
            newComment.current.select();
            setSubmitText('Update');
        }
    }, [props.currentComment]);

    const submitComment = () => {
        if (comment && user) {
            const newComment = {
                postID: props.postID,
                body: comment,
                username: user.username
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment)
            };
            if (props.currentComment && props.currentComment.body !== comment) {
                fetch('http://localhost:8088/updateComment/' + props.currentComment.id, requestOptions)
                    .then(res => res.json())
                    .then(res => {
                        if (res) {
                            props.addComment();
                        }
                    })
            }
            else {
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
    }

    const onCommentChange = (event) => {
        setComment(event.target.value);
    }

    return (
        <div className='new-comment'>
            <textarea value={comment} ref={newComment} className='comment-input' 
                autoFocus={props.currentComment ? true : false} onChange={onCommentChange} 
                placeholder='Add a comment...' maxLength={255}/>
            <button className='btn submit' onClick={submitComment}>{submitText}</button>
        </div>
    );
}
  
export default NewComment;