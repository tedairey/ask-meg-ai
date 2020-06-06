import React, { useState, useEffect, useContext } from 'react';
import './Post.scss';
import NewComment from './newComment/NewComment';
import Comment from './comment/Comment';
import commenticon from '../../commenticon.png';
import { formatDate } from '../../Helpers';
import { UserContext } from '../../context/UserContext';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

function Post (props){
    
    const [comments, setComments] = useState([]),
        [date, setDate] = useState(''),
        [commentCount, setCommentCount] = useState(props.post.commentCount),
        [isLoaded, setIsLoaded] = useState(false),
        user = /*{username: 'tairey'}*/useContext(UserContext);

    let [commentSectionStyle, setCommentSectionStyle] = useState('comment-section d-none');
    
    const [showCommentSection, setShowCommentSection] = useState(false);

    const isSmall = useMediaQuery({ query: '(max-width: 768px)'})

    useEffect(() => {
        setDate(formatDate(props.post.submitted));
    }, []);

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
        //begin dummy code
        // const comments = [],
        //     comment1 = {
        //         username: 'tairey',
        //         body: 'first comment',
        //         submitted: 'yy20m05d29--',
        //         id: 1
        //     },
        //     comment2 = {
        //         username: 'pairey',
        //         body: 'second comment',
        //         submitted: 'yy20m05d29--',
        //         id: 2
        //     }
        // comments.push(<Comment key={1} comment={comment1}/>);
        // comments.push(<Comment key={2} comment={comment2}/>);
        // setComments(comments);
        // setIsLoaded(true);
        //end dummy code
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
        else if (!showCommentSection) {
            fetchComments();
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