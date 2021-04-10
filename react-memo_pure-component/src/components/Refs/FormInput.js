import React, { Component } from 'react'

export default class FormInput extends Component {
    constructor(props){
        super(props)    
      this.InputRef = React.createRef();
    }

    focusInput = () => {       
        this.InputRef.current.focus();
        this.InputRef.current.style.background = '#e8f8f5'
    }
    
    
    render() {
        return (
            <div className='input-box'>
                <input  ref={this.InputRef} />
                <button onClick={this.focusInput}>Focus Input</button>               
            </div>
        )
    }
}
