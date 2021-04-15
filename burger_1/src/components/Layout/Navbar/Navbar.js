import React from 'react'
import classes from './navbar.module.css'
import logo from './../../../assets/img/logo.png'
const Navbar = (props) => {
    return (
        <>
        <div className={classes.navbar}>
            <div className={classes.navbarLogo}>
                <img src={logo} alt="logo"/>
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
