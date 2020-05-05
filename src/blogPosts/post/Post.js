import React, { useState, useEffect, useContext } from 'react';
import './Post.scss';
import NewComment from './newComment/NewComment';
import Comment from './comment/Comment';
import commenticon from '../../commenticon.png';
import { formatDate } from '../../Helpers';
import { UserContext } from '../../context/UserContext';
import { useMediaQuery } from 'react-responsive';

function Post (props){
    
    const [comments, setComments] = useState([]),
        [date, setDate] = useState(''),
        user = useContext(UserContext);

    let [commentSectionStyle, setCommentSectionStyle] = useState('comment-section d-none');
    
    const [showCommentSection, setShowCommentSection] = useState(false);

    const isSmall = useMediaQuery({ query: '(max-width: 768px)'})

    useEffect(() => {
        setDate(formatDate(props.post.submitted));
    });

    const addComment = (comment) => {
        const newComments = comments.concat(<Comment comment={comment}/>);
        setComments(newComments);
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
        if (!showCommentSection) {
            fetch('http://localhost:8088/comments/' + props.post.id)
                .then(res => res.json())
                .then(res => {
                    const comments = [];
                    if (res.length) {
                        for (const [index, comment] of res.entries()) {
                            comments.push(<Comment comment={comment}/>);
                        }
                        setComments(comments);
                        return false;
                    }
                    else if (!user) {
                        setComments('No user comments');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            setComments([]);
            return false;
        }
    }
        
    const post = props.post;
    return (
        <div className='post-container'>
            <div className='post box'>
                <div className='post-header'>
                    {!isSmall && <>
                        <span className='author'>{post.name}</span>
                    </>}
                    <h4><strong>{post.title}</strong></h4>
                    {isSmall && <>
                        <div className='author'>By: {post.name}</div>
                    </>}
                </div>
                <hr/>
                <p>
                    {post.body}
                </p>
                <br/>
                <div className='post-footer'>
                    <a href='javascript:void(0)' onClick={toggleComments}>
                        <img className='comment-icon' src={commenticon}/>
                        Comments {post.comments}
                    </a>
                    <span className='post-date'>{date}</span>
                </div>
            </div>
            <div className={commentSectionStyle}>
                {user &&
                    <NewComment postID={post.id} addComment={addComment}/>
                }  
                {comments}
            </div>
        </div>
    );
}
  
export default Post;