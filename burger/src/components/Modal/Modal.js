import React from 'react'
import BackDrop from './BackDrop/BackDrop'
import classes from './modal.module.css'
const Modal = (props) => {
    return (
        <>
        <BackDrop show={props.show} clicked={props.close}/>
        <div className={classes.Modal} style={{ transform: props.show ? "translateY(0)" : "translateY(100vh)",
        opacity: props.show ? "1" : "0"}}>
            {props.children}
        </div>
        </>
    )
}

export default Modal
