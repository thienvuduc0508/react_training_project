import React from 'react'
import classes from './BMIngredients.module.css'
import PropTypes from 'prop-types'
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
BMIgredients.propTypes = {
    label: PropTypes.string.isRequired,
    less: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
}
export default BMIgredients
