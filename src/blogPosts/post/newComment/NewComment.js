import React, { Component } from 'react';
import './NewComment.css';

class NewComment extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    componentDidMount () {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            this.setState({loggedIn: true});
            this.setState({name: user.firstName + " " + user.lastName});
        }
    }

    submitComment = () => {
        if (this.state.comment && this.state.loggedIn) {
            const newComment = {
                postID: this.props.postID,
                body: this.state.comment,
                name: this.state.name
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment)
            };
            fetch('http://localhost:8088/newComment', requestOptions)
                .then(res => res.json())
                .then(res => {
                    this.setState({comment: ''});
                    this.props.addComment(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    onCommentChange = (event) => {
        this.setState({comment: event.target.value});
    }

    render(){
        return (
            <div className='new-comment'>
                <textarea value={this.state.comment} className='comment-input' 
                    onChange={this.onCommentChange} placeholder='Add a comment...'/>
                <button className='btn submit' onClick={this.submitComment}>Submit</button>
            </div>
        );
      }
  }
  
export default NewComment;