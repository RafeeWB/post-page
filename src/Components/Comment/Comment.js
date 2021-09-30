import React from 'react';
import './Comment.css'

const Comment = (props) => {
    return (
        <div className="comment">
            <div>
                <p>From ({props.comment.email})</p>
                <p>{props.comment.body}</p>
            </div>
        </div>
    );
};

export default Comment;