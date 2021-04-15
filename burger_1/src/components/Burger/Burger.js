import React from 'react'
import BurgerElement from './BurgerElements/BurgerElement'
import classes from './burger.module.css'

const Burger = ({ burgerElements }) => {
    let burgerElement = null;

    return (
        <>
         <div className={classes.Burger}>
            <BurgerElement type="breadTop" />
            {burgerElement}
            <BurgerElement type="breadBottom" />     
        </div>   
        </>
    )
}

export default Burger
