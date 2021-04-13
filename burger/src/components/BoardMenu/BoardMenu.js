import React from 'react'
import classes from './BoardMenu.module.css'
import BMIngredients from './BoardMenuIngredients/BMIgredients'
const BoardMenu = (props) => {
    const boardItems = [
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Meat', type: 'meat'},
    ]
    return (
        <div className={classes.BoardMenu}>
            <span>Total Price : ${props.price}</span>
            {boardItems.map( item => {
                return (
                    <BMIngredients key={item.label} 
                    label={item.label} 
                    add={() => props.addIngredient(item.type)}
                    less={() => props.lessIngredients(item.type)}
                    /> 
                )
            })}
            <button className={classes.btnOrder}>Order Now!</button>
        </div>
    )
}

export default BoardMenu
