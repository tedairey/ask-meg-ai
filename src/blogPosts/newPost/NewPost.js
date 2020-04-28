import React, { Component } from 'react';
import './NewPost.css';
import { useHistory } from 'react-router-dom';

class NewPost extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    goToMyPosts = () => {
        const history = useHistory();
        history.push('/blog-posts/my');
    }

    componentDidMount () {
        this.setState({loggedIn: this.props.loggedIn});
    }

    submitPost = () => {
        const newPost = {
            username: this.props.username,
            name: this.props.name,
            title: this.state.title,
            body: this.state.body
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        };
        fetch('http://localhost:8088/newPost', requestOptions)
            .then(res => {
                this.goToMyPosts();
            })
            .catch(err => {
                console.log(err);
            });
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    onBodyChange = (event) => {
        this.setState({body: event.target.value});
    }

    render(){
        if (this.state.loggedIn) {
            return (
                <div className='new-post container'>
                    <h2 className="blog-posts-header">
                        New Post
                    </h2>
                    <div className='new-post-container'>
                        <span className='title-box'>
                            <textarea className='blog-title' value={this.state.title} onChange={this.onTitleChange} 
                                placeholder="Title"/>
                        </span>
                        <span className='body-box'>
                            <textarea className='blog-body' rows='7' value={this.state.body} onChange={this.onBodyChange} 
                                placeholder="Begin typing here"/>
                        </span>
                        <button className="btn submit submit-post" onClick={this.submitPost}>Submit</button>
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
  }
  
export default NewPost;