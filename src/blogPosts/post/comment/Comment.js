import React, { Component, useState } from 'react';
import './Comment.css';
import { formatDate } from '../../../Helpers';

function Comment (props) {

    const date = useState(formatDate(props.comment.submitted))

    return (
        <div className='comment'>
            <span className='comment-body'>
                {props.comment.body}
            </span>
            <span className='comment-name'>
                {props.comment.name}
            </span>
            <div className='comment-date'>
                {date}
            </div>
        </div>
    );
}
  
export default Comment;