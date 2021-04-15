import classes from './boardElement.module.scss'
import React from 'react'

const BoardElement = ({label, add, remove}) => {
    return (
        <div className={classes.BoardElement}>
            <span className={classes.label}>{label}</span>
            <button className={classes.btnLess} onClick={remove}>Less</button>
            <button className={classes.btnMore} onClick={add}>More</button>
        </div>
    )
}

export default BoardElement
