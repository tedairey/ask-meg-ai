import React, { Component } from 'react';
import './Post.css';
import NewComment from './newComment/NewComment';
import Comment from './comment/Comment';
import commenticon from '../../commenticon.png';
import { formatDate } from '../../Helpers';

class Post extends Component {
    constructor(props){
        super(props) 
        this.state = {
            comments: [],
            commentSection: false
        }
        this.commentSection = 'comment-section d-none';
    }

    componentDidMount () {
        this.setState({date: formatDate(this.props.post.submitted)});
    }

    addComment = (comment) => {
        this.setState(state => {
            const comments = state.comments.concat(<Comment comment={comment}/>);
       
            return {
              comments
            };
        });
    }

    toggleCommentSection = () => {
        if (this.state.commentSection) {
            this.commentSection += ' d-none';
        }
        else {
            this.commentSection = this.commentSection.substring(0, this.commentSection.length-7);
        }
        this.setState({commentSection: !this.state.commentSection});
    }

    toggleComments = () => {
        this.toggleCommentSection();
        if (!this.state.commentSection) {
            fetch('http://localhost:8088/comments/' + this.props.post.id)
                .then(res => res.json())
                .then(res => {
                    const comments = [];
                    for (const [index, comment] of res.entries()) {
                        comments.push(<Comment comment={comment}/>);
                    }
                    this.setState({comments: comments});
                    return false;
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            this.setState({comments: []});
            return false;
        }
    }

    render(){
        const post = this.props.post;
        return (
            <div className='post-container'>
                <div className='post box'>
                    <div className='post-header'>
                        <h4><strong>{post.title}</strong></h4>
                        <span className='author'>{post.name}</span>
                    </div>
                    <hr/>
                    <br/>
                    <p>
                        {post.body}
                    </p>
                    <br/>
                    <div className='post-footer'>
                        <a href='javascript:void(0)' onClick={this.toggleComments}>
                            <img className='comment-icon' src={commenticon}/>
                            Comments {post.comments}
                        </a>
                        <span className='post-date'>{this.state.date}</span>
                    </div>
                </div>
                <div className={this.commentSection}>
                    <NewComment postID={post.id} addComment={this.addComment}/>
                    {this.state.comments}
                </div>
            </div>
        );
      }
  }
  
export default Post;