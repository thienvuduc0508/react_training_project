import React from 'react'
import classes from './ingredients.module.css'

const Ingredients = ({ type}) => {
    let ingredients = null;
    switch(type){
        case 'breadTop':
            ingredients = (<div className={classes.breadTop}>
                <div className={classes.seed}></div>
                <div className={classes.seed2}></div>
            </div>)
            break;
        case 'breadBottom':
            ingredients = <div className={classes.breadBottom}></div>
            break;
            case 'salad':
            ingredients = <div className={classes.salad}></div>   
            break;
            case 'cheese':
            ingredients = <div className={classes.cheese}></div>   
            break;
            case 'bacon':
            ingredients = <div className={classes.bacon}></div>   
            break;
            case 'meat':
            ingredients = <div className={classes.meat}></div>   
            break;
            default :
            ingredients = null;
    }
    return (
        ingredients
    )
}

export default Ingredients

