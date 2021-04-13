import React from 'react'
import classes from './BMIngredients.module.css'
const BMIgredients = (props) => {
    return (
        <div className={classes.BMIgredients}>
            <div className={classes.label}>{props.label}</div>
            <button className={classes.btnLess} onClick={props.less}>
                Less
            </button>
            <button className={classes.btnMore} onClick={props.add}>
                More
            </button>
        </div>
    )
}

export default BMIgredients
