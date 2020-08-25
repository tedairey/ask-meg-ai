import React, { useState, useContext, useEffect, useRef } from 'react';
import './NewPost.scss';
import { UserContext } from '../../context/UserContext';
import { getTimestamp } from '../../Helpers';
import { updatePost, addPost } from '../../config/service/PostService';

function NewPost(props) {
    const [title, setTitle] = useState(''),
        titleBox = useRef(),
        [body, setBody] = useState(''),
        bodyBox = useRef(),
        [isEditingPost, setIsEditingPost] = useState(false),
        user = useContext(UserContext);

    useEffect(() => {
        if (props && props.currentPost) {
            setTitle(props.currentPost.title);
            setBody(props.currentPost.body);
            setIsEditingPost(true);
        }
    }, [props.currentPost]);

    const submitPost = () => {
        if (title && body) {
            if (isEditingPost && (body !== props.currentPost.body || title !== props.currentPost.title)) {
                let newPost = props.currentPost;
                newPost.title = title;
                newPost.body = body;
                updatePost(props.currentPost.id, newPost)
                    .then(res => {
                        props.close();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            else if (!isEditingPost) {
                const timestamp = getTimestamp(),
                    newPost = {
                        username: user.username,
                        title: title,
                        body: body,
                        timestamp: timestamp,
                        topic: '',
                        comments: []
                    };

                addPost(newPost)
                    .then(docRef => {
                        if (props.addPost) {
                            props.addPost(docRef.id);
                            setTitle('');
                            setBody('');
                            props.showModal(false);
                        }
                        if (props.fullPage) {
                            props.history.push('/blog-posts/user');
                        }
                    })
                    .catch(err => {
                        console.error("Error adding document: ", err);
                    });
            }
        }
        else {
            if (!title) {
                titleBox.current.style.borderColor = 'red';
            }
            if (!body) {
                bodyBox.current.style.borderColor = 'red';
            }
        }
    }

    const onTitleChange = (event) => {
        setTitle(event.target.value);
        titleBox.current.style.borderColor = 'black';
    }

    const onBodyChange = (event) => {
        setBody(event.target.value);
        bodyBox.current.style.borderColor = 'black';
    }

    if (user) {
        return (
            <div className='new-post'>
                <h2 className="blog-posts-header">
                    New Post
                </h2>
                <div className='new-post-container'>
                    <span className='title-box'>
                        <textarea className='blog-title' value={title} onChange={onTitleChange} 
                            placeholder="Title" ref={titleBox}/>
                    </span>
                    <span className='body-box'>
                        <textarea className='blog-body' rows='7' value={body} onChange={onBodyChange} 
                            placeholder="Begin typing here" ref={bodyBox}/>
                    </span>
                    <button className="btn submit submit-post" onClick={submitPost}>Submit</button>
                    {isEditingPost && <button className='btn btn-link' onClick={props.close}>Cancel</button>}
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