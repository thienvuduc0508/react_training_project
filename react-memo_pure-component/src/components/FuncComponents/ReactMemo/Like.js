import React from 'react'

const Like = (props) => {
    console.log('Like render in FuncFaceBook');
    return (
        <div>
            <p>Like Numbers {props.likeNumber}</p>
        </div>
    )
}

export default Like
