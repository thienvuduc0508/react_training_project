import React from 'react'
import classes from './content.module.css'
const Content = (props) => {
    const ingredients = Object.keys(props.ingredients).map(igred => {
        return (
            <li key={igred}>
                <span>{igred} : {props.ingredients[igred]}</span>
            </li>
        )
    })
    return (
        <div className={classes.content}>
            <h2>Your Order</h2>
            <p>A delicious burger with the following ingredients: </p>
            <ul>{ingredients}</ul>
            <h5>Total Price: ${props.totalPrice.toFixed(2)}</h5>
            <p>Continue to Checkout?</p>
            <button className={classes.btnCancel} onClick={props.btnClick}>Cancel</button>
            <button className={classes.btnContinue}>Continue</button>
        </div>
    )
}

export default Content
