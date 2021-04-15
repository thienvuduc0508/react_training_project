import classes from './burgerElement.module.css';
import React from 'react'

const BurgerElement = ({type}) => {
    let burgerElement = null;
    switch(type) {
        case 'breadTop':
            burgerElement = (
                <div className={classes.breadTop}>
                    <div className={classes.seed}></div>
                    <div className={classes.seed2}></div>
                </div>
            )
            break;
        case 'salad':
            burgerElement = <div className={classes.salad}></div>
        break;
        case 'cheese':
            burgerElement = <div className={classes.cheese}></div>
        break;
        case 'bacon':
            burgerElement = <div className={classes.bacon}></div>
        break;
        case 'meat':
            burgerElement = <div className={classes.meat}></div>
        break;
        case 'breadBottom':
            burgerElement = <div className={classes.breadBottom}></div>
            break;
        default :
        return;
    }
    return (
       burgerElement
    )
}

export default BurgerElement
