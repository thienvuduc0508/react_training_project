import React, { useState } from 'react'
import Like from './Like'
import Post from './Post'

const FuncFacebook = (props) => {
    const [likeCounter, setLikeCounter] = useState(0);
    const increaLike = () => {
        setLikeCounter(likeCounter + 1)
    }
    return ( 
        <div>
            <h1>Function FB</h1>
            <Post />
            <Like likeNumber = {likeCounter}/>
            <button onClick={increaLike}>Like</button>
        </div>
    )
}

export default FuncFacebook
