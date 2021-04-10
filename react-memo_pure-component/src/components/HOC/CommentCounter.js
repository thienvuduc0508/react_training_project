import React, { Component } from 'react'
import withCount from './HOC'

 class CommentCounter extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>{this.props.countNumber}</h3>
                <button onClick={this.props.handleClick}>Add Comment</button>
            </React.Fragment>
        )
    }
}

const EnhancedCommentCounter = withCount(CommentCounter,1)
export default EnhancedCommentCounter;