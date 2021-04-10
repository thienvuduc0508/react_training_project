import React from 'react'

const Post = (props) => {
    console.log('render Post using React memo');
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}

// using React.memo
export default React.memo(Post) 
