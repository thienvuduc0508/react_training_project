import React, { useState } from 'react'
import Like from './Like'
import Post from './Post'

const FuncFacebook = (props) => {
    const [likeCounter, setLikeCounter] = useState(0);
    const [post, setPost] = useState({ id: 10, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat maxime deleniti'})
    
     const increaLike = () =>  {
        setLikeCounter(likeCounter + 1)
        setPost({...post, content: 'asdasdsadsaaaaa'})
        
    }
    return ( 
        <div>
            <h1>Function FB</h1>
            <Post post={post}/>
            <Like likeNumber = {likeCounter}/>
            <button onClick={increaLike}>Like</button>
        </div>
    )
}

export default FuncFacebook
