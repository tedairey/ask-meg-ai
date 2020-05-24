import React, { Component, useState } from 'react';
import './Comment.scss';
import { formatDate } from '../../../Helpers';

function Comment (props) {

    const [date, setDate] = useState(formatDate(props.comment.submitted));

    const formatName = (name) => {
        if (name.length > 18) {
            const spaceIndex = name.indexOf(' ');
            return name.substring(0, spaceIndex+2) + '.'
        }
        return name;
    }

    return (
        <div className='comment'>
            <div className='comment-name'>
                {formatName(props.comment.name)}
            </div>
            <div className='comment-date'>
                {date}
            </div>
            <hr/>
            <div className='comment-body'>
                {props.comment.body}
            </div>
        </div>
    );
}
  
export default Comment;