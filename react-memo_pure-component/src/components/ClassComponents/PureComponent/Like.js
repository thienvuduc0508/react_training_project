import React, { Component } from 'react'

export default class Like extends Component {
    render() {
        console.log('Like render');
        return (
            <div>
                Like numbers: {this.props.likeCounter}
            </div>
        )
    }
}
