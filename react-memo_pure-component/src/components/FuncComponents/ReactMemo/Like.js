import React from 'react'
import PropTypes from 'prop-types'

const Like = (props) => {
    console.log('Like render in FuncFaceBook');
    return (
        <div>
            <p>Like Numbers {props.likeNumber}</p>
        </div>
    )
}
Like.propTypes = {
    likeNumber: PropTypes.number,
}
export default Like
