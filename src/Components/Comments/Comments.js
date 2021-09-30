import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Comments.css"
import Comment from '../Comment/Comment'

const Comments = () => {
    const {postId} = useParams()
    const[comments, setComments] = useState([])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    } , [])   

    return (
        <div>
            <div>
            {
                comments.map(com => <Comment comment={com}></Comment>)
            }
            </div>
        </div>
    );
};

export default Comments;