import React, { Component } from 'react'


const withCount = (Component, data) => {
    return class extends Component {
        constructor(props){
            super(props)
            this.state = {
                count: data
            }
        }
        handleClick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {

            return (
                <Component countNumber = {this.state.count} handleClick = {this.handleClick} />
            )
        }
    }
}
export default withCount

