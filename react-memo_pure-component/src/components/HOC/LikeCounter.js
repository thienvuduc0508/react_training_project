import React, { Component } from 'react'
import withCount from './HOC'

class LikeCounter extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>{this.props.countNumber}</h3>
                <button onClick={this.props.handleClick}>Add Like</button>
            </React.Fragment>
        )
    }
}
const EnhancedLikeCounter = withCount(LikeCounter, 0)
export default EnhancedLikeCounter;
