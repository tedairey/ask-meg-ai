import React, { Component } from 'react';
import './Comment.css';
import { formatDate } from '../../../Helpers';

class Comment extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    componentDidMount () {
        this.setState({date: formatDate(this.props.comment.submitted)})
    }

    render(){
        return (
            <div className='comment'>
                <span className='comment-body'>
                    {this.props.comment.body}
                </span>
                <span className='comment-name'>
                    {this.props.comment.name}
                </span>
                <div className='comment-date'>
                    {this.state.date}
                </div>
            </div>
        );
      }
  }
  
export default Comment;