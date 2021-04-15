import React from 'react'
import BurgerElement from './BurgerElements/BurgerElement'
import classes from './burger.module.scss'

const Burger = ({ burgerElements }) => {
   let burgerElement = Object.keys(burgerElements).map( elKey => {
       return [...Array(burgerElements[elKey])]
   .map( (_,i) => {
       return <BurgerElement key={elKey + i} type={elKey} />
   })
})
   
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
