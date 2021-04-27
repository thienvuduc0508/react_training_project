import React from 'react';
import classes from './burgerCheckout.module.scss';
import Burger from '../Burger/Burger';
const BurgerCheckout = (props) => {
    return (
        <div className={classes.burgerCheckout}>
            <div className={classes.burger}>
                <Burger burgerElements={props.burgerElements} />
                <p className={classes.totalPrice}>Total Price: ${props.price}</p>
            </div>
        </div>
    )
}

export default BurgerCheckout
