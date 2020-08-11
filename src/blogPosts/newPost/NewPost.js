import React, { useState, useContext, useEffect, useRef } from 'react';
import './NewPost.scss';
import { UserContext } from '../../context/UserContext';
import Endpoint from '../../config/Endpoint';

function NewPost(props) {
    const [title, setTitle] = useState(''),
        titleBox = useRef(),
        [topic, setTopic] = useState(''),
        topicBox = useRef(),
        topicError = 'Please Select a Topic',
        topicErrorRef = useRef(),
        [body, setBody] = useState(''),
        bodyBox = useRef(),
        [isEditingPost, setIsEditingPost] = useState(false);

    useEffect(() => {
        if (props && props.currentPost) {
            setTitle(props.currentPost.title);
            setBody(props.currentPost.body);
            setTopic(props.currentPost.topic);
            setIsEditingPost(true);
        }
    }, [props.currentPost])

    const user = useContext(UserContext);

    const submitPost = () => {
        if (title && body && topic) {
            if (isEditingPost && body !== props.currentPost.body) {
                let newPost = props.currentPost;
                newPost.title = title;
                newPost.topic = topic;
                newPost.body = body;
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newPost)
                };
                fetch(Endpoint + 'posts/updatePost', requestOptions)
                    .then(res => res.json())
                    .then(post => {
                        //success
                        //props.showSuccessModal(true);
                        props.close();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            else if (!isEditingPost) {
                const newPost = {
                    username: user.username,
                    title: title,
                    topic: topic,
                    body: body
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newPost)
                };
                fetch(Endpoint + 'posts/newPost', requestOptions)
                    .then(res => res.json())
                    .then(post => {
                        if (props.addPost) {
                            props.addPost();
                            setTitle('');
                            setBody('');
                            props.showModal(false);
                        }
                        if (props.fullPage) {
                            props.history.push('/blog-posts/user');
                        }
                        else {
                            //props.showModal(false);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
        else {
            if (!title) {
                titleBox.current.style.borderColor = 'red';
            }
            if (!topic) {
                topicBox.current.style.borderColor = 'red';
                topicErrorRef.current.style.display = 'block';
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

    const onTopicChange = (event) => {
        setTopic(event.target.value);
        topicBox.current.style.borderColor = 'black';
        topicErrorRef.current.style.display = 'none';
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
                    <div className='topic-error' ref={topicErrorRef}>{topicError}</div>
                    <span className='topic-box'>
                        <select className='topic' value={topic} onChange={onTopicChange} ref={topicBox}>
                            <option value=''>Select a topic...</option>
                            <option value='Weight Loss'>Weight Loss</option>
                            <option value='Emotional Eating'>Emotional Eating</option>
                            <option value='Motivating Stories'>Motivating Stories</option>
                            <option value='Feedback to Meg'>Feedback to Meg</option>
                            <option value='Healthy Lifestyle'>Healthy Lifestyle</option>
                            <option value='Daily Exercise Challenge'>Daily Exercise Challenge</option>
                            <option value="Dietitian's Corner">Dietitian's Corner</option>
                        </select>
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