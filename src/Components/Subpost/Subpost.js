import React, { useEffect, useState } from 'react';
import './Subpost.css'
import Typography from '@material-ui/core/Typography'
import {useParams} from "react-router-dom";
import Comments from '../Comments/Comments';

const Subpost = () => {
    const {postId} = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`http://fakeapi.jsonparseronline.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <div className="App">
                <Typography variant="h2">
                  Demo Post with comments
                </Typography>
            </div>
            <div className="text-area">
            <h3>Post title:{post.title}</h3>
            <p>{post.content}</p>
            <h3>Comments</h3>
            <Comments></Comments>
            </div>
        </div>
    );
};

export default Subpost;