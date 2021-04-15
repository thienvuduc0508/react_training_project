import classes from './backdrop.module.css'
import React from 'react'

const BackDrop = ({showBackdrop, clicked }) => {
    return (
        showBackdrop ? <div className={classes.backDrop} onClick={clicked} /> : null       
    )
}

export default BackDrop
