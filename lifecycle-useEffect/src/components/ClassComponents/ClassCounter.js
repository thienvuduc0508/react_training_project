import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount(){
        console.log(`Start click ${this.state.count} time`)
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count)
        console.log(`Click by Class counter ${this.state.count} time`)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={ e => {this.setState({name: e.target.value})}}/>
                <button onClick={ () => this.setState({count: this.state.count + 1})}>ClassCounter clicked {this.state.count} time</button>
            </div>
        )
    }
}
