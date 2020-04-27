import React, { Component } from 'react';
import './Post.css';
import commenticon from '../../commenticon.png';

class Post extends Component {
    constructor(props){
        super(props) 
        this.state = {
            date: ""
        }
    }

    componentDidMount () {
        this.formatDate(this.props.post.submitted);
    }

    formatDate = (submitted) => {
        let year = submitted.substring(2,4),
            month = submitted.substring(5,7),
            day = submitted.substring(8,10);
        if (day[0] === '0') {
            day = day.slice(1);
        }
        if (month[0] === '0') {
            month = month.substring(1);
        }
        this.setState({date: month + '-' + day + '-' + year})
    }

    render(){
        const post = this.props.post;
        return (
            <li className="post">
                <div className='box'>
                    <h4><strong>{post.title}</strong></h4>
                    <br/>
                    <p>
                        {post.body}
                    </p>
                    <br/>
                    <div className='post-footer'>
                        <a href='#'><img className='comment-icon' src={commenticon}/>Comments</a>
                        <span className='post-date'>{this.state.date}</span>
                    </div>
                </div>
            </li>
        );
      }
  }
  
export default Post;