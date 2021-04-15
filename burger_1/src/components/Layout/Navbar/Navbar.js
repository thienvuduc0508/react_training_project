import React from 'react'
import classes from './navbar.module.scss'


const Navbar = (props) => {
    return (
        <>
        <div className={classes.navbar}>
            <div className={classes.navbarLogo}>
                <img src={require('./../../../assets/img/logo.png').default} alt="logo"/>
            </div>
            <div className={classes.navbarItem}>
                <li>Burger Builder</li>
                <li>Checkout</li>
            </div>
        </div>
        </>
    )
}

export default Navbar
