import React from 'react'
import classes from './board.module.scss'
import BoardElement from './BoardElements/BoardElement'

const Board = ({totalPrice, showModal, addBurgerElement, removeBurgerElement}) => {
    
    const boardElements = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
]
        
    return (
        <div className={classes.Board}>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            {boardElements.map( element => {
                return <BoardElement key={element.label} label={element.label}
                 add={() => addBurgerElement(element.type)} 
                 remove={() => removeBurgerElement(element.type)}
                />
            })}
            <button className={classes.btnOrder} onClick={showModal}>Order Now</button>
        </div>
    )
}

export default Board
