import React from 'react';
import './Eachpost.css'
import Button from '@material-ui/core/Button'

const Eachpost = (props) => {
    return (
        <div className="text-area">
            <h2>Post title: {props.post.title}</h2>
            <div className="likes-area">
            <p>Total likes: {props.post.likes}</p>
            <p> Total hits: {props.post.hits}</p>
            </div>
            <Button href={`/subpost/${props.post.id}`} variant="contained" color="primary"> See post</Button>
        </div>    
    );
};

export default Eachpost;