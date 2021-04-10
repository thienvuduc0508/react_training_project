import React, { Component } from 'react'
import Like from './Like'
import Post from './Post'

export default class ClassFacebook extends Component {
    constructor(){
        super()
        this.state = {
            countLike: 0
        }
    }
    increLike = () => {
        this.setState(preState => ({
            countLike: preState.countLike + 1
        }))
    }
    render() {
        return (
            <div>
                <h1>Class FB</h1>
                <Post />
                <Like likeCounter = {this.state.countLike} />
                <button onClick={this.increLike}>Like</button>
            </div>
        )
    }
}
