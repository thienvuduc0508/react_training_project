import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasChanged: false
        }
    }
    increaProduct = () => {
        this.setState({
            hasChanged: true
        })
        this.props.increament(this.props.name)
    }
    render() {
        let classes = []
        if (this.props.count >= 2){
            classes.push('green')
        }
        
        return (
            <div className='product'>
                <h2>{this.props.name}</h2>
                <h3 className={classes.join(" ")}>{this.props.count}</h3>
                <button onClick={this.increaProduct}>Increase</button>
                {this.state.hasChanged && (
                <span>Updated</span>
                )}
            </div>
            
        )
    }
}
