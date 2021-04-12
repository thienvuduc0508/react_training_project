import React, { Component } from 'react'
import classes from './ingredients.css'

class Ingredients extends Component {
    constructor(props){
        super(props)
        this.state = {
            salad: 1,
            cheese: 2,
            bacon: 1,
            meat: 2
        }
    }
    burgerIngredients =() => {
        let {salad, cheese, bacon, meat } = this.state;
        let burgerIngred = [];
        for(let i = 0; i < salad; i++){
            burgerIngred.push(<div key={burgerIngred.length} className='salad'></div>)
        }
        for(let i = 0; i < cheese; i++){
            burgerIngred.push(<div key={burgerIngred.length} className='cheese'></div>)
        }
        for(let i = 0; i < bacon; i++){
            burgerIngred.push(<div key={burgerIngred.length} className='bacon'></div>)
        }
        for(let i = 0; i < meat; i++){
            burgerIngred.push(<div key={burgerIngred.length} className='meat'></div>)
        }
        if(burgerIngred.length === 0){
            burgerIngred.push(<p key={burgerIngred.length}>Please adding ingredients!</p>)
        }
        return burgerIngred;
    }
    render(){   
    return (
        <div>
            <div className={classes['bread-top']}></div>
            {this.burgerIngredients}
        </div>
        )
}
}

export default Ingredients;
