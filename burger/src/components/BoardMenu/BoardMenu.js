import React from 'react'
import classes from './BoardMenu.module.css'
import BMIngredients from './BoardMenuIngredients/BMIgredients'
import PropTypes from 'prop-types'
const BoardMenu = (props) => {
    const boardItems = [
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Meat', type: 'meat'},
    ]
    return (
        <div className={classes.BoardMenu}>
            <span>Total Price : ${props.price.toFixed(2)}</span>
            {boardItems.map( item => {
                return (
                    <BMIngredients key={item.label} 
                    label={item.label} 
                    add={() => props.addIngredient(item.type)}
                    less={() => props.lessIngredient(item.type)}
                    /> 
                )
            })}
            <button className={classes.btnOrder} onClick={props.order}>Order Now!</button>
        </div>
    )
}

BoardMenu.propTypes = {
    price: PropTypes.number.isRequired,
    addIngredient: PropTypes.func.isRequired,
    lessIngredient: PropTypes.func.isRequired,   
}

export default BoardMenu
