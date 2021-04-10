import React, { Component } from 'react'
import withCount from './HOC'
import PropTypes from 'prop-types'
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
LikeCounter.propTypes = {
    countNumber: PropTypes.number,
    handleClick: PropTypes.func
}
const EnhancedLikeCounter = withCount(LikeCounter, 1)
export default EnhancedLikeCounter;
