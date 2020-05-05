import React, { useState, useContext } from 'react';
import './NewPost.scss';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function NewPost(props) {
    const [title, setTitle] = useState(''),
        [body, setBody] = useState('');

    const user = useContext(UserContext);

    const submitPost = () => {
        if (title && body) {
            const newPost = {
                username: user.username,
                name: user.name,
                title: title,
                body: body
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost)
            };
            fetch('http://localhost:8088/posts/newPost', requestOptions)
                .then(res => res.json())
                .then(post => {
                    if (props.addPost) {
                        props.addPost(post);
                        setTitle('');
                        setBody('');
                    }
                    if (props.fullPage) {
                        props.history.push('/blog-posts/my');
                    }
                    else {
                        props.showModal(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onBodyChange = (event) => {
        setBody(event.target.value);
    }

    if (user) {
        return (
            <div className='new-post container'>
                <h2 className="blog-posts-header">
                    New Post
                </h2>
                <div className='new-post-container'>
                    <span className='title-box'>
                        <textarea className='blog-title' value={title} onChange={onTitleChange} 
                            placeholder="Title"/>
                    </span>
                    <span className='body-box'>
                        <textarea className='blog-body' rows='7' value={body} onChange={onBodyChange} 
                            placeholder="Begin typing here"/>
                    </span>
                    <button className="btn submit submit-post" onClick={submitPost}>Submit</button>
                    <br/>
                </div>
            </div>
        );
    } else {
        return (
            <div className='my-posts container'>
                <h1 className='blog-posts-header'>
                    You are not logged in
                </h1>
            </div>
        );
    }
}
  
export default NewPost;