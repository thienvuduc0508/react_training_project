import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => {
    console.log('render Post using React memo');
    console.log(props.post);
    return (
        <div>
            <p>{props.post.content}</p>
        </div>
    )
}
function areEqual (prevProps, nextProps) {
    return nextProps.post.content === prevProps.post.content; 
};

Post.propTypes = { 
    content: PropTypes.object,
}

// using React.memo
export default React.memo(Post, areEqual)
