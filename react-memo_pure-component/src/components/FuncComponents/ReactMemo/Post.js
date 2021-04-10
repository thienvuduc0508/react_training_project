import React from 'react'
import PropTypes from 'prop-types'


const Post = (props) => {
    console.log('render Post using React memo');
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}

Post.propTypes = {
    content: PropTypes.string,
}

// using React.memo
export default React.memo(Post) 
