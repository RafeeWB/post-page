import React, { useEffect, useState } from 'react';
import './Home.css'
import Typography from '@material-ui/core/Typography'
import Eachpost from '../EachPost/Eachpost';

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("http://fakeapi.jsonparseronline.com/posts")
        .then(res => res.json())
        .then(data => 
          setPosts(data.slice(0,10))
          )
      },[])
    return (
        <div>
            <div className="App">
                <Typography variant="h2">
                Wellcome To Demo Posts
                </Typography>
            </div>
            {
                posts.map(pos => <Eachpost post={pos} ></Eachpost>)
            }
        </div>
    );
};

export default Home;