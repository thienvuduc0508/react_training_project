import React from 'react';
import classes from './burgerCheckout.module.scss';
import Burger from '../Burger/Burger';
const BurgerCheckout = (props) => {
    return (
        <div className={classes.burgerCheckout}>
            <div style={{ width: "100%", margin: "auto" }}>
                <Burger burgerElements={props.burgerElements} />
            </div>
        </div>
    )
}

export default BurgerCheckout
