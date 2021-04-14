import React from 'react'
import classes from './backdrop.module.css'
const BackDrop = (props) => {
    return (
        props.show ? <div className={classes.BackDrop} onClick={props.clicked} /> : null
    )
}

export default BackDrop
