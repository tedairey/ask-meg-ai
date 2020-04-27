import React, { Component } from 'react';
import './NewPost.css';

class NewPost extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    submitPost = () => {
        const newPost = {
            username: 'tairey',
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
                console.log(res);
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
        return (
            <div className='new-post container'>
                <h4 className="blog-posts-header">
                    New Post
                </h4>
                <input value={this.state.title} onChange={this.onTitleChange} placeholder="Title"/>
                <input value={this.state.body} onChange={this.onBodyChange} placeholder="Begin typing here"/>
                <button class="btn submit" onClick={this.submitPost}>Submit</button>
                <br/>
            </div>
        );
      }
  }
  
export default NewPost;