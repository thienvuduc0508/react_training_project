import React from 'react'
import classes from './content.module.css'


const Content = ({ burgerElements, totalPrice, btnClick }) => {
    const burgerElement = Object.keys(burgerElements).map( element => {
       return <li key={element}>
            <span>{element} : {burgerElements[element]}</span>
        </li>
    })
    return (
        <div className={classes.content}>
        <h2>Your Order</h2>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{burgerElement}</ul>
        <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
        <p>Continue to Checkout?</p>
        <button className={classes.btnCancel} onClick={btnClick}>Cancel</button>
        <button className={classes.btnContinue}>Continue</button>
    </div>
    )
}

export default Content
