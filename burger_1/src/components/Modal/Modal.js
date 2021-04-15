import React from 'react'
import BackDrop from './BackDrop/BackDrop'
import classes from './modal.module.css'

const Modal = (props) => {
    return (
        <>
        <BackDrop showBackdrop={props.show} clicked={props.close} />
        <div className={ props.show ? classes.showModal : classes.hideModal} >
        {props.children}
        </div>
        </>
    )
    
}

export default Modal
